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
        address user;
        address driver;
        string destination;
        uint256 fare; // Fare in Ether
        bool isCompleted;
        bool isCancelled;
    }

    mapping(address => Driver) private drivers;
    mapping(uint256 => Ride) private rides;
    uint256 private rideCount;

    mapping(address => bool) public isDriver;
    mapping(address => bool) public isUser;

    // Events
    event RideBooked(uint256 rideId, address indexed user, address indexed driver, string destination, uint256 fare);
    event RideCompleted(uint256 rideId, address indexed driver, address indexed user);
    event RideCancelled(uint256 rideId, address indexed driver, address indexed user, string reason);

    // User Registration
    function registerUser() public {
        isUser[msg.sender] = true;
    }

    // Driver Registration
    function registerDriver() public {
        isDriver[msg.sender] = true;
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

    // Emit the event with the correct parameters
    emit RideBooked(destinationId, msg.sender, msg.sender, _location, _fareInEther); // Here we use msg.sender as the driver
}

    // Function for users to book a ride (with escrow)
    function bookRide(address driverAddress, uint256 destinationId) public payable onlyUser {
        Driver storage driver = drivers[driverAddress];
        Destination storage destination = driver.destinations[destinationId];

        require(destination.isAvailable, "Destination is not available");
        require(msg.value == destination.fare * 1 ether, "Incorrect fare amount");

        // Calculate payments
        uint256 driverAmount = (msg.value * 10) / 100;  // 10% to driver
        // uint256 escrowAmount = (msg.value * 90) / 100;  // 90% held in escrow

        // Transfer 10% to the driver immediately (non-refundable)
        payable(driver.driverAddress).transfer(driverAmount);

        // Record the ride in escrow
        rides[rideCount] = Ride({
            user: msg.sender,
            driver: driverAddress,
            destination: destination.location,
            fare: destination.fare,
            isCompleted: false,
            isCancelled: false
        });

        emit RideBooked(rideCount, msg.sender, driverAddress, destination.location, destination.fare);
        rideCount++;
    }

    // Function to mark ride as completed (release funds to driver)
    function completeRide(uint256 rideId) public {
        Ride storage ride = rides[rideId];

        require(msg.sender == ride.driver || msg.sender == ride.user, "Only the user or driver can complete the ride");
        require(!ride.isCompleted, "Ride is already completed");
        require(!ride.isCancelled, "Ride has been cancelled");

        ride.isCompleted = true;

        // Release the funds to the driver (this would be the total fare, but already paid 10% to the driver)
        // The contract retains the rest, so no additional action here if only the initial 10% is already transferred.

        emit RideCompleted(rideId, ride.driver, ride.user);
    }

    // Function for users to cancel a ride
    function cancelRide(uint256 rideId) public onlyUser {
        Ride storage ride = rides[rideId];

        require(msg.sender == ride.user, "Only the user can cancel");
        require(!ride.isCompleted, "Ride is already completed");
        require(!ride.isCancelled, "Ride is already cancelled");

        ride.isCancelled = true;

        // Calculate the cancellation fee and refund amount
        uint256 escrowAmount = ride.fare * 90 / 100 * 1 ether; // 90% held in escrow
        uint256 cancellationFee = (escrowAmount * 5) / 100; // 5% cancellation fee
        uint256 refundAmount = escrowAmount - cancellationFee; // Remaining after cancellation fee

        // Ensure contract has enough balance to refund
        require(address(this).balance >= refundAmount, "Insufficient contract balance for refund");

        // Refund the user the remaining amount
        payable(ride.user).transfer(refundAmount);

        emit RideCancelled(rideId, ride.driver, ride.user, "User cancelled the ride");
    }
}
