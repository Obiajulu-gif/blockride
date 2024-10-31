// components/Sidebar.js
"use client";
import {
	FaChartBar,
	FaCar,
	FaExchangeAlt,
	FaGift,
	FaUserTie,
	FaIdCard,
	FaQuestionCircle,
	FaCog,
	FaSignOutAlt,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div
			className={`${
				isSidebarOpen ? "w-64" : "w-20"
			} bg-gray-900 text-white h-screen p-4 transition-all duration-300 flex flex-col justify-between fixed md:relative z-50`}
		>
			{/* Sidebar Header */}
			<div>
				<h2
					className={`text-3xl font-bold text-orange-500 ${
						!isSidebarOpen && "hidden"
					}`}
				>
					Blockride
				</h2>

				{/* Main Navigation */}
				<nav className="mt-8 flex flex-col space-y-4">
					<Link
						href="/dashboard"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaChartBar className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-base font-medium">Overview</span>
						)}
					</Link>
					<Link
						href="/dashboard/book"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaCar className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-base font-medium">Book A Trip</span>
						)}
					</Link>
					<Link
						href="/dashboard/dispatch"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaExchangeAlt className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-base font-medium">Dispatch Service</span>
						)}
					</Link>
					<Link
						href="/dashboard/dao"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaUserTie className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-base font-medium">BlockRide DAO</span>
						)}
					</Link>
					<Link
						href="/dashboard/rewards"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaGift className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-base font-medium">Rewards</span>
						)}
					</Link>

					{/* Other Profiles Section */}
					<div
						className={`text-sm text-gray-400 mt-6 ${
							!isSidebarOpen && "hidden"
						}`}
					>
						Access Other Profiles
					</div>

					<Link
						href="/dashboard/driver"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaIdCard className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-base font-medium">Driver Profile</span>
						)}
					</Link>
					<Link
						href="/dashboard/investor"
						className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
					>
						<FaUserTie className="text-2xl" />
						{isSidebarOpen && (
							<span className="text-base font-medium">Investor Profile</span>
						)}
					</Link>
				</nav>
			</div>

			{/* Bottom Section */}
			<div className="flex flex-col space-y-4 mt-auto">
				<Link
					href="/dashboard/help"
					className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
				>
					<FaQuestionCircle className="text-2xl" />
					{isSidebarOpen && <span className="text-base font-medium">Help</span>}
				</Link>
				<Link
					href="/dashboard/settings"
					className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
				>
					<FaCog className="text-2xl" />
					{isSidebarOpen && (
						<span className="text-base font-medium">Settings</span>
					)}
				</Link>
				<Link
					href="/dashboard/logout"
					className="flex items-center space-x-4 p-2 rounded hover:bg-gray-800 transition-colors"
				>
					<FaSignOutAlt className="text-2xl" />
					{isSidebarOpen && (
						<span className="text-base font-medium">Log Out</span>
					)}
				</Link>
			</div>

			{/* Toggle Button */}
			<button
				className="absolute top-4 right-4 text-orange-500"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				{isSidebarOpen ? (
					<FaChevronLeft size={24} />
				) : (
					<FaChevronRight size={24} />
				)}
			</button>
		</div>
	);
};

export default Sidebar;
