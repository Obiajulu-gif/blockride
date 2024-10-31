// components/dashboard/TripHistory.js
import React from "react";

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
			status: "Cancelled",
			payment: "Bitcoin",
			distance: "12KM",
			color: "text-red-500",
		},
		// ...add more trips as needed
	];

	return (
		<div className="bg-gray-800 p-4 rounded-lg overflow-auto">
			<table className="w-full text-left text-sm">
				<thead className="text-gray-400">
					<tr>
						<th className="p-2">Pick Up Point</th>
						<th className="p-2">Destination</th>
						<th className="p-2">Payment</th>
						<th className="p-2">Distance</th>
						<th className="p-2">Status</th>
					</tr>
				</thead>
				<tbody>
					{trips.map((trip, index) => (
						<tr key={index} className="border-t border-gray-700">
							<td className="p-2 text-white">{trip.pickUp}</td>
							<td className="p-2 text-white">{trip.pickUp}</td>
							<td className="p-2 text-white">{trip.payment}</td>
							<td className="p-2 text-white">{trip.distance}</td>
							<td className={`p-2 ${trip.color}`}>{trip.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TripHistory;
