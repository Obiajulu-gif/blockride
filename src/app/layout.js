// app/layout.js
"use client";
import "./globals.css";
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body>
        {isDashboard ? (
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
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
