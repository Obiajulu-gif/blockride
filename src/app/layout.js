// app/layout.js
"use client"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import DashboardLayout from "./dashboard/layout";
// export const metadata = {
// 	title: "BlockRide",
// 	description:
// 		"A blockchain-powered platform for secure, transparent, and accessible transportation.",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
	return (
		<html lang="en">
      <body>
        {isDashboard ? (
          <DashboardLayout />
        ) : (
          <>
            <Navbar /> 
            <main>{children}</main> 
            <Footer />
          </>
        )}
			</body>
		</html>
	);
}
