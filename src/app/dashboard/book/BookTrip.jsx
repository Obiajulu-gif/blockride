// components/dashboard/BookTrip.js
"use client"
import React from "react";
import { useRouter } from "next/navigation"; // Use `next/navigation` instead of `next/router`

const BookTrip = () => {
	const router = useRouter();

	return (
		<div className="p-8 bg-gray-900 min-h-screen text-white">
			<h1 className="text-3xl font-semibold mb-6">Book A Trip</h1>
			<h2 className="text-xl font-medium text-center mb-8">Select An Option</h2>

			<div className="flex flex-col md:flex-row justify-center gap-8">
				{/* Solo-Trip Card */}
				<div className="bg-gray-800 p-6 rounded-lg w-full md:w-1/3 flex flex-col items-center shadow-lg">
					<div className="bg-black w-full h-48 rounded-lg mb-4"></div>
					<h3 className="text-lg font-semibold mb-2">Solo-Trip</h3>
					<p className="text-sm text-gray-400 text-center mb-4">
						Enjoy a private trip all to yourself, perfect for direct routes and
						complete comfort.
					</p>
					<button
						onClick={() => router.push("/dashboard/book/solo-trip")}
						className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
					>
						Select
					</button>
				</div>

				{/* Shared-Ride Card */}
				<div className="bg-gray-800 p-6 rounded-lg w-full md:w-1/3 flex flex-col items-center shadow-lg">
					<div className="bg-black w-full h-48 rounded-lg mb-4"></div>
					<h3 className="text-lg font-semibold mb-2">Shared-Ride</h3>
					<p className="text-sm text-gray-400 text-center mb-4">
						Share your ride with others heading in the same direction and save
						on costs while reducing your carbon footprint.
					</p>
					<button
						onClick={() => router.push("/dashboard/book/shared-ride")}
						className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
					>
						Select
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookTrip;
