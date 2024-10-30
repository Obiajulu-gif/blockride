"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 fixed w-full z-10">
			<div className="container mx-auto flex items-center justify-between">
				{/* Logo and Name */}
				<div className="flex items-center">
					<Image
						src="/logo.png"
						alt="Blockride Logo"
						width={40}
						height={40}
						className="mr-2"
					/>
					<span className="text-white text-xl font-semibold">Blockride</span>
				</div>

				{/* Menu Links */}
				<div className="hidden md:flex space-x-8 text-white">
					<Link href="/">Home</Link>
					<Link href="/about">About Us</Link>
					<Link href="/contact">Contact Us</Link>
				</div>

				{/* Connect Wallet Button */}
				<button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-lg">
					Connect Wallet
				</button>

				{/* Hamburger Menu Icon */}
				<div
					className="md:hidden text-white cursor-pointer"
					onClick={toggleMenu}
				>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-gray-800 text-white">
					<Link href="/" onClick={toggleMenu} className="block px-4 py-2">
						Home
					</Link>
					<Link href="/about" onClick={toggleMenu} className="block px-4 py-2">
						About Us
					</Link>
					<Link
						href="/contact"
						onClick={toggleMenu}
						className="block px-4 py-2"
					>
						Contact Us
					</Link>
					<button
						onClick={toggleMenu}
						className="w-full bg-orange-500 text-white px-4 py-2 mt-2 rounded-lg"
					>
						Connect Wallet
					</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
