"use client"; // Add this to enable client-side rendering if required in Next.js
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

const LoginPage = () => {
	const router = useRouter(); // Initialize router

	const handleLogin = () => {
		// Navigate to the dashboard route when login is clicked
		router.push("/dashboard");
	};

	return (
		<div className="flex min-h-screen bg-gray-900">
			{/* Left Side - Image with Overlay Card */}
			<div className="relative w-1/2 hidden lg:block">
				<Image
					src="/images/login.png"
					alt="Become a Driver"
					fill
					style={{ objectFit: "cover" }}
					className="opacity-90"
				/>
				<div className="absolute bottom-10 left-10 bg-black bg-opacity-60 text-white p-6 rounded-lg max-w-xs">
					<h3 className="text-lg font-semibold flex items-center">
						<span className="bg-orange-500 rounded-full p-2 mr-2"></span>
						Become a Driver
					</h3>
					<p className="text-sm mt-2">
						Easily share rides and split costs with friends through secure,
						smart contract transactions, making group travel affordable and
						eco-friendly.
					</p>
				</div>
			</div>

			{/* Right Side - Login Form */}
			<div className="flex w-full lg:w-1/2 items-center justify-center p-11">
				<div className="max-w-md w-full space-y-8">
					<h2 className="text-2xl font-bold text-white">
						Login with your email
					</h2>
					<p className="text-gray-400">Enter your mail to begin your journey</p>

					{/* Login Form */}
					<div className="space-y-4">
						<div>
							<label className="sr-only" htmlFor="email">
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="Enter your email"
								className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
							/>
						</div>
						<button
							onClick={handleLogin} // Trigger handleLogin on click
							className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-300"
						>
							Log in
						</button>
					</div>

					{/* Divider */}
					<div className="flex items-center space-x-2 text-gray-400">
						<hr className="w-full border-gray-600" />
						<span>Or</span>
						<hr className="w-full border-gray-600" />
					</div>

					{/* Social Login Buttons */}
					<div className="space-y-3">
						<button className="flex items-center justify-center w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-100 transition duration-300">
							<FaGoogle className="mr-2" /> Continue with Google
						</button>
						<button className="flex items-center justify-center w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-100 transition duration-300">
							<FaTwitter className="mr-2 text-blue-500" /> Continue with Twitter
						</button>
					</div>

					{/* Register Link */}
					<p className="text-center text-gray-400">
						Don’t have an account?{" "}
						<Link href="/register" className="text-orange-500 hover:underline">
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
