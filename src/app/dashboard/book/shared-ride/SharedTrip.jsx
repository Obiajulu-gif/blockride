// components/dashboard/SharedTrip.js
"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Correct import for `useRouter`

const SharedTrip = () => {
	const [isRecurring, setIsRecurring] = useState(true);
	const [isLoading, setIsLoading] = useState(false); // To manage loading state
	const router = useRouter();

	const handlePublishRide = () => {
		setIsLoading(true); // Start loading animation

		// Simulate an API call or process delay
		setTimeout(() => {
			router.push("/dashboard/book/shared-ride/results"); // Navigate to results page
			setIsLoading(false); // Reset loading state after navigation
		}, 1000);
	};
	const handleJoin = () => {
		setIsLoading(true); // Start loading animation

		// Simulate an API call or process delay
		setTimeout(() => {
			router.push("/dashboard/book/shared-ride/joinride"); // Navigate to results page
			setIsLoading(false); // Reset loading state after navigation
		}, 1000);
	};

	return (
		<div className="p-8 bg-gray-900 min-h-screen text-white flex flex-col items-center">
			<div className="flex items-center space-x-2 mb-6">
				<FaArrowLeft onClick={() => router.back()} className="cursor-pointer" />
				<h1 className="text-xl font-semibold">
					Book A Trip &gt;&gt; Shared-Trip
				</h1>
			</div>

			<div className="flex justify-between w-full max-w-4xl items-center mb-6">
				<div className="text-sm text-gray-400 flex items-center space-x-2">
					<span>Book A Trip</span>
					<span className="text-gray-500">{">>"}</span>
					<span className="font-semibold">Shared-Trip</span>
				</div>
				<div className="flex space-x-4">
					<button className="bg-orange-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-orange-600">
						Publish A Ride
					</button>
					<button
						onClick={handleJoin}
						className="text-orange-500 font-semibold"
					>
						Join A Ride
					</button>
				</div>
			</div>

			<div className="bg-gray-800 p-6 rounded-lg w-full max-w-4xl shadow-lg">
				{/* Trip Details */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold mb-4">Trip Details</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label className="block text-gray-400 mb-2">Departure</label>
							<select className="w-full bg-gray-700 p-3 rounded text-white">
								<option>Select Pick-up Location</option>
							</select>
						</div>
						<div>
							<label className="block text-gray-400 mb-2">Destination</label>
							<select className="w-full bg-gray-700 p-3 rounded text-white">
								<option>Select Destination</option>
							</select>
						</div>
						<div>
							<label className="block text-gray-400 mb-2">Time</label>
							<select className="w-full bg-gray-700 p-3 rounded text-white">
								<option>08:00 AM</option>
							</select>
						</div>
						<div>
							<label className="block text-gray-400 mb-2">Trip Cost</label>
							<input
								type="text"
								value="$50.02"
								readOnly
								className="w-full bg-gray-700 p-3 rounded text-white"
							/>
						</div>
					</div>
				</div>

				{/* Passenger Details */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold mb-4">Passenger Details</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label className="block text-gray-400 mb-2">
								Seats on Vehicle
							</label>
							<select className="w-full bg-gray-700 p-3 rounded text-white">
								<option>Select Seats</option>
							</select>
						</div>
						<div>
							<label className="block text-gray-400 mb-2">People to Take</label>
							<select className="w-full bg-gray-700 p-3 rounded text-white">
								<option>Select Capacity</option>
							</select>
						</div>
					</div>
				</div>

				{/* Recurring/Custom Schedule */}
				<div className="flex items-center justify-start space-x-4 mb-6">
					<button
						className={`${
							isRecurring
								? "bg-orange-500 text-white"
								: "bg-gray-700 text-gray-400"
						} py-2 px-4 rounded-full`}
						onClick={() => setIsRecurring(true)}
					>
						Recurring
					</button>
					<button
						className={`${
							!isRecurring
								? "bg-orange-500 text-white"
								: "bg-gray-700 text-gray-400"
						} py-2 px-4 rounded-full`}
						onClick={() => setIsRecurring(false)}
					>
						Custom
					</button>
				</div>

				{/* Days of the week */}
				<div className="flex items-center justify-start space-x-4 mb-8">
					{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
						<span
							key={day}
							className="bg-gray-700 text-white py-2 px-3 rounded-full text-sm cursor-pointer hover:bg-gray-600"
						>
							{day}
						</span>
					))}
				</div>

				{/* Publish Button with Loading State */}
				<button
					onClick={handlePublishRide}
					className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition"
					disabled={isLoading}
				>
					{isLoading ? "Publishing..." : "Publish Ride"}
				</button>
			</div>
		</div>
	);
};

export default SharedTrip;
