// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.8.0/contracts/access/Ownable.sol";

contract TransportDApp is Ownable {
    struct Destination {
        string location;
        uint256 fare; // Fare in Ether
        bool isAvailable;
    }

    struct Driver {
        address payable driverAddress;
        mapping(uint256 => Destination) destinations;
        uint256 destinationCount;
    }

    struct Ride {
        uint256 rideId;
        address user;
        address driver;
        string destination;
        uint256 fare; // Fare in Ether
        bool isCompleted;
        bool isCancelled;
        uint256 bookedAt; // Timestamp
        uint256 completedAt; // Timestamp
    }

    uint256 public rideCount;
    address[] public registeredDrivers; // Array of registered driver addresses
    mapping(address => Driver) private drivers;
    mapping(uint256 => Ride) public activeRides; // Mapping for ongoing rides
    mapping(uint256 => Ride) public completedRides; // Mapping for completed rides

    mapping(address => bool) public isDriver;
    mapping(address => bool) public isUser;

    // Events
    event RideBooked(uint256 rideId, address indexed user, address indexed driver, string destination, uint256 fare);
    event RideCompleted(uint256 rideId, address indexed driver, address indexed user);
    event RideCancelled(uint256 rideId, address indexed driver, address indexed user, string reason);
    event UserRegistered(address user);
    event DriverRegistered(address driver);
    event DestinationAdded(address driver, string location, uint256 fare);

    // User Registration
    function registerUser() public {
        require(!isUser[msg.sender], "User already registered");
        isUser[msg.sender] = true;
        emit UserRegistered(msg.sender);
    }

    // Driver Registration
    function registerDriver() public {
        require(!isDriver[msg.sender], "Driver already registered");
        isDriver[msg.sender] = true;
        registeredDrivers.push(msg.sender); // Add to registered drivers array
        emit DriverRegistered(msg.sender);
    }

    modifier onlyDriver() {
        require(isDriver[msg.sender], "Not a registered driver");
        _;
    }

    modifier onlyUser() {
        require(isUser[msg.sender], "Not a registered user");
        _;
    }

    // Function for drivers to add destinations with fare
    function addDestination(string memory _location, uint256 _fareInEther) public onlyDriver {
        require(_fareInEther > 0, "Fare must be greater than zero");

        Driver storage driver = drivers[msg.sender];
        uint256 destinationId = driver.destinationCount;

        driver.destinations[destinationId] = Destination({
            location: _location,
            fare: _fareInEther,
            isAvailable: true
        });

        driver.destinationCount++;
        emit DestinationAdded(msg.sender, _location, _fareInEther);
    }

    // Function to retrieve all available destinations across all drivers
    function getAllAvailableDestinations() public view returns (Destination[] memory) {
        uint256 totalDestinations = 0;

        // First pass: count total destinations
        for (uint256 i = 0; i < registeredDrivers.length; i++) {
            totalDestinations += drivers[registeredDrivers[i]].destinationCount;
        }

        Destination[] memory allDestinations = new Destination[](totalDestinations);
        uint256 index = 0;

        // Second pass: populate destination array
        for (uint256 i = 0; i < registeredDrivers.length; i++) {
            Driver storage driver = drivers[registeredDrivers[i]];
            for (uint256 j = 0; j < driver.destinationCount; j++) {
                Destination storage dest = driver.destinations[j];
                if (dest.isAvailable) {
                    allDestinations[index] = dest;
                    index++;
                }
            }
        }
        return allDestinations;
    }

    // Function for users to book a ride
    function bookRide(address driverAddress, uint256 destinationId) public payable onlyUser {
        Driver storage driver = drivers[driverAddress];
        Destination storage destination = driver.destinations[destinationId];

        require(destination.isAvailable, "Destination is not available");
        require(msg.value == destination.fare * 1 ether, "Incorrect fare amount");

        activeRides[rideCount] = Ride({  // Corrected to use activeRides
            rideId: rideCount,
            user: msg.sender,
            driver: driverAddress,
            destination: destination.location,
            fare: destination.fare,
            isCompleted: false,
            isCancelled: false,
            bookedAt: block.timestamp,
            completedAt: 0
        });

        emit RideBooked(rideCount, msg.sender, driverAddress, destination.location, destination.fare);
        rideCount++;
    }

    // Function to mark ride as completed
    function completeRide(uint256 rideId) public {
        Ride storage ride = activeRides[rideId];

        require(msg.sender == ride.driver || msg.sender == ride.user, "Only the user or driver can complete the ride");
        require(!ride.isCompleted, "Ride is already completed");
        require(!ride.isCancelled, "Ride has been cancelled");

        ride.isCompleted = true;
        ride.completedAt = block.timestamp;

        completedRides[rideId] = ride;  // Move to completedRides
        delete activeRides[rideId];     // Remove from activeRides

        emit RideCompleted(rideId, ride.driver, ride.user);
    }

    // Function for users to cancel a ride
    function cancelRide(uint256 rideId) public onlyUser {
        Ride storage ride = activeRides[rideId];

        require(msg.sender == ride.user, "Only the user can cancel");
        require(!ride.isCompleted, "Ride is already completed");
        require(!ride.isCancelled, "Ride is already cancelled");

        ride.isCancelled = true;

        emit RideCancelled(rideId, ride.driver, ride.user, "User cancelled the ride");
    }
}
