// components/DashboardLayout.js
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
	return (
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
	);
};

export default DashboardLayout;
