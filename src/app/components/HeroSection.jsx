import Image from "next/image";

const HeroSection = () => {
	return (
		<section
			className="relative w-full h-screen bg-cover bg-center"
			style={{ backgroundImage: "url(/images/Hero.png)" }}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black opacity-40"></div>

			{/* Content */}
			<div className="relative container mx-auto px-6 flex flex-col justify-center items-start h-full">
				<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
					<span className="text-orange-500">Together,</span> We Make
					<br /> a Greener World.
				</h1>
				<p className="mt-4 text-white max-w-md">
					Whether you're commuting to work, meeting friends, or exploring new
					places, our service offers a smart, safe, and eco-friendly way to get
					around.
				</p>
				<div className="mt-8 flex space-x-4">
					<button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300">
						Book A Trip
					</button>
					<button className="bg-transparent border border-gray-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 hover:text-black transition duration-300">
						Rent A Car
					</button>
				</div>
			</div>

			{/* Stats Section */}
			<div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-6">
				<div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
					<div>
						<h3 className="text-2xl font-semibold">1250+</h3>
						<p className="text-sm">Rides Completed</p>
					</div>
					<div>
						<h3 className="text-2xl font-semibold">150+</h3>
						<p className="text-sm">Cars Listed</p>
					</div>
					<div>
						<h3 className="text-2xl font-semibold">560+</h3>
						<p className="text-sm">Total Users</p>
					</div>
					<div>
						<h3 className="text-2xl font-semibold">98%</h3>
						<p className="text-sm">Satisfied Users</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
