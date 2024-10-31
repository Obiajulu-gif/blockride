// components/dashboard/TripHistory.js
import React from "react";
import { FaBitcoin } from "react-icons/fa";

const TripHistory = () => {
	const trips = [
		{
			pickUp: "Pick 734 Main Str, Lagos Nigeria",
			status: "Pending",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-yellow-500",
		},
		{
			pickUp: "Pick 734 Main Str, Lagos Nigeria",
			status: "Completed",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-green-500",
		},
		{
			pickUp: "Pick 734 Main Str, Lagos Nigeria",
			status: "Completed",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-green-500",
		},
		{
			pickUp: "Pick 734 Main Str, Lagos Nigeria",
			status: "Cancelled",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-red-500",
		},
		{
			pickUp: "Pick 734 Main Str, Lagos Nigeria",
			status: "Completed",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-green-500",
		},
		// Additional trips can be added here if necessary
	];

	return (
		<div className="bg-gray-800 p-6 rounded-lg overflow-auto">
			<table className="w-full text-sm">
				<thead>
					<tr className="text-gray-400 border-b border-gray-700">
						<th className="p-4 text-left">Pick Up Point</th>
						<th className="p-4 text-left">Destination</th>
						<th className="p-4 text-left">Payment</th>
						<th className="p-4 text-left">Distance</th>
						<th className="p-4 text-left">Status</th>
					</tr>
				</thead>
				<tbody>
					{trips.map((trip, index) => (
						<tr key={index} className="border-b border-gray-700 hover:bg-gray-700 transition">
							<td className="p-4 text-white">{trip.pickUp}</td>
							<td className="p-4 text-white">{trip.pickUp}</td>
							<td className="p-4 flex items-center space-x-2 text-white">
								<FaBitcoin className="text-yellow-500" />
								<span>{trip.payment}</span>
							</td>
							<td className="p-4 text-white">{trip.distance}</td>
							<td className={`p-4 font-semibold ${trip.color}`}>{trip.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TripHistory;
