// components/dashboard/SoloTripBooking.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const SoloTripBooking = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false); // Add loading state
	const [formData, setFormData] = useState({
		departure: "",
		destination: "",
		time: "08:00 AM",
		cost: "$50.02",
	});

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Handle form submission
	const handleSubmit = () => {
		setLoading(true); // Start loading indicator
		// Pass the form data as query parameters to the checkout page
		router.push(
			`/dashboard/book/solo-trip/checkout?departure=${formData.departure}&destination=${formData.destination}&time=${formData.time}&cost=${formData.cost}`
		);
	};

	return (
		<div className="p-8 bg-gray-900 min-h-screen text-white">
			<div className="flex items-center space-x-2 mb-6">
				<FaArrowLeft onClick={() => router.back()} className="cursor-pointer" />
				<h1 className="text-xl font-semibold">
					Book A Trip &gt;&gt; Solo-Trip
				</h1>
			</div>

			<div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<div>
						<label className="text-sm text-gray-400">Departure</label>
						<select
							name="departure"
							onChange={handleInputChange}
							className="w-full p-2 mt-1 bg-gray-700 rounded text-gray-200"
						>
							<option value="">Select Pick up Location</option>
							<option value="Location A">Location A</option>
							<option value="Location B">Location B</option>
						</select>
					</div>

					<div>
						<label className="text-sm text-gray-400">Destination</label>
						<select
							name="destination"
							onChange={handleInputChange}
							className="w-full p-2 mt-1 bg-gray-700 rounded text-gray-200"
						>
							<option value="">Select Destination</option>
							<option value="Destination A">Destination A</option>
							<option value="Destination B">Destination B</option>
						</select>
					</div>

					<div>
						<label className="text-sm text-gray-400">Time</label>
						<select
							name="time"
							value={formData.time}
							onChange={handleInputChange}
							className="w-full p-2 mt-1 bg-gray-700 rounded text-gray-200"
						>
							<option>08:00 AM</option>
							<option>09:00 AM</option>
							<option>10:00 AM</option>
						</select>
					</div>

					<div>
						<label className="text-sm text-gray-400">Trip Cost</label>
						<input
							type="text"
							name="cost"
							value={formData.cost}
							readOnly
							className="w-full p-2 mt-1 bg-gray-700 rounded text-gray-200"
						/>
					</div>
				</div>

				{/* Loading Indicator or Continue Button */}
				<button
					onClick={handleSubmit}
					disabled={loading}
					className={`w-full py-3 rounded-full text-white font-semibold text-lg transition ${
						loading
							? "bg-gray-500 cursor-not-allowed"
							: "bg-orange-500 hover:bg-orange-600"
					}`}
				>
					{loading ? "Processing..." : "Continue"}
				</button>
			</div>
		</div>
	);
};

export default SoloTripBooking;
