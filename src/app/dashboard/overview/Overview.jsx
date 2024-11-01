// components/dashboard/Overview.js
"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Overview = () => {
	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl font-semibold">Welcome, David</h1>
				<div className="flex items-center space-x-2">
					<span className="text-gray-400">Currency</span>
					<div className="relative inline-flex items-center">
						<button className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center space-x-2">
							<span className="text-green-500">$</span>
							<span>USD</span>
						</button>
					</div>
				</div>
			</div>

			{/* Welcome Card */}
			<div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between shadow-lg">
				{/* Left Side - Image Placeholder */}
				<div className="w-1/2 bg-gray-700 rounded-lg h-64 flex items-center justify-center">
					<div className="text-gray-500">[Image Placeholder]</div>
				</div>

				{/* Right Side - Welcome Text */}
				<div className="w-1/2 pl-8">
					<h2 className="text-3xl font-bold mb-4">Welcome to BlockRide For Drivers!</h2>
					<p className="text-gray-400 mb-6">
						As a BlockRide driver, you have the freedom to earn from every trip while taking full advantage
						of our blockchain-powered platform.
					</p>
					<div className="flex space-x-2 mb-4">
						<span className="w-3 h-3 rounded-full bg-orange-500"></span>
						<span className="w-3 h-3 rounded-full bg-gray-500"></span>
						<span className="w-3 h-3 rounded-full bg-gray-500"></span>
					</div>
					<button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
						Start Verification
					</button>
				</div>
			</div>
		</div>
	);
};

export default Overview;
