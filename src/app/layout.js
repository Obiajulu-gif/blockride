// app/layout.js
"use client";
import "./globals.css";
import NavbarLanding from "./components/NavbarLanding";
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import DriverNavbar from "./driverdashboard/DriverNavbar"; // Import driver-specific Navbar
import DriverSidebar from "./driverdashboard/DriverSidebar"; // Import driver-specific Sidebar

export default function RootLayout({ children }) {
	const pathname = usePathname();
	const isDashboard = pathname.startsWith("/dashboard");
	const isDriverDashboard = pathname.startsWith("/driverdashboard");

	return (
		<html lang="en">
			<body>
				{isDriverDashboard ? (
					<div className="flex h-screen bg-gray-900 text-white">
						{/* Driver Sidebar */}
						<DriverSidebar />

						{/* Driver Main Content Area */}
						<div className="flex-1 flex flex-col">
							{/* Driver Navbar */}
							<DriverNavbar />

							{/* Content */}
							<main className="flex-1 p-6 overflow-y-auto">{children}</main>
						</div>
					</div>
				) : isDashboard ? (
					<div className="flex h-screen bg-gray-900 text-white">
						{/* Sidebar */}
						<Sidebar />

						{/* Main content area */}
						<div className="flex-1 flex flex-col">
							{/* Navbar */}
							<Navbar />

							{/* Content */}
							<main className="flex-1 p-6 overflow-y-auto">{children}</main>
						</div>
					</div>
				) : (
					<>
						<NavbarLanding />
						<main>{children}</main>
						<Footer />
					</>
				)}
			</body>
		</html>
	);
}
