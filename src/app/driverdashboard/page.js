"use client";
import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Overview = () => {
	const [step, setStep] = useState(1); // Track the current step
	const [showSuccessModal, setShowSuccessModal] = useState(false); // Track modal visibility
	const router = useRouter(); // Initialize the router for navigation

	// Function to go to the next step
	const handleNextStep = () => {
		if (step === 2) {
			setShowSuccessModal(true); // Show modal after final step
		} else {
			setStep((prevStep) => prevStep + 1);
		}
	};

	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl font-semibold">Welcome, David</h1>
				<div className="flex items-center space-x-2">
					<span className="text-gray-400">Currency</span>
					<div className="relative inline-flex items-center bg-gray-800 rounded-md px-4 py-2">
						<FaDollarSign className="text-green-500 mr-1" />
						<span className="text-white">USD</span>
					</div>
				</div>
			</div>

			{/* Step 1: Welcome Card */}
			{step === 1 && (
				<div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between shadow-lg">
					{/* Left Side - Image */}
					<div className="w-1/2 flex justify-center items-center">
						<Image
							src="/images/driver.png" // Replace with the actual imported image path
							alt="BlockRide Driver"
							className="rounded-lg"
							width={600}
							height={600}
						/>
					</div>

					{/* Right Side - Welcome Text */}
					<div className="w-1/2 pl-8">
						<h2 className="text-4xl font-bold mb-4 leading-snug">
							Welcome to BlockRide <br /> For Drivers!
						</h2>
						<p className="text-gray-400 mb-6 leading-relaxed">
							As a BlockRide driver, you have the freedom to earn from every
							trip while taking full advantage of our blockchain-powered
							platform.
						</p>
						<div className="flex space-x-2 mb-4">
							<span className="w-3 h-3 rounded-full bg-orange-500"></span>
							<span className="w-3 h-3 rounded-full bg-gray-500"></span>
							<span className="w-3 h-3 rounded-full bg-gray-500"></span>
						</div>
						<button
							onClick={handleNextStep}
							className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-lg"
						>
							Start Verification
						</button>
					</div>
				</div>
			)}

			{/* Step 2: Verification Page */}
			{step === 2 && (
				<div className="bg-gray-800 rounded-lg p-6 shadow-lg mt-8">
					<h2 className="text-3xl font-bold mb-4">
						Complete Verification To Access Your Driver Portal
					</h2>
					<ul className="text-lg text-gray-400 mb-6">
						<li>🔹 Personal Information</li>
						<li>🔹 Government-Issued ID</li>
						<li>🔹 A Photo Holding Valid ID</li>
					</ul>
					<div className="flex items-center justify-between">
						<p className="text-sm text-gray-500">
							Review time: 5mins - 3 working days
						</p>
						<button
							onClick={handleNextStep}
							className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-lg"
						>
							Start Now
						</button>
					</div>
				</div>
			)}

			{/* Success Modal */}
			{showSuccessModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-gray-800 p-6 rounded-lg text-center w-80 relative">
						<button
							onClick={() => setShowSuccessModal(false)}
							className="absolute top-2 right-2 text-gray-400"
						>
							&times;
						</button>
						<h3 className="text-2xl font-semibold mb-6">Identity Verified</h3>
						<p className="text-orange-400 text-lg font-semibold mb-4">
							You have successfully completed your verification.
						</p>
						<button
							onClick={() => router.push("/driverdashboard/overview")} // Navigate to driver dashboard overview
							className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-lg"
						>
							Open Dashboard
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Overview;
