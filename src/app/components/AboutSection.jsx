import Image from "next/image";

const AboutSection = () => {
	return (
		<section className="w-full bg-gradient-to-br from-gray-900 to-gray-800 py-16">
			<div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:space-x-10">
				{/* Left Icon */}
				<div className="flex justify-center md:justify-start w-full md:w-1/3 mb-6 md:mb-0">
					<Image
						src="/images/Vector.png" 
						alt="Blockchain icon"
						width={150}
						height={150}
						className="opacity-80"
					/>
				</div>

				{/* Text Content */}
				<div className="w-full md:w-2/3 text-center md:text-left">
					<p className="text-orange-500 uppercase tracking-wide mb-2 text-sm md:text-base">
					💼 About Us
					</p>
					<h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
						Driving Innovation In Mobility.
					</h2>
					<h3 className="text-yellow-400 text-xl font-semibold mb-4">
						What is Blockride?
					</h3>
					<p className="text-gray-300 leading-relaxed">
						Blockride is a decentralized car rental and ride-sharing platform
						designed to bring trust, transparency, and flexibility to how you
						move. Built on the Arbitrum blockchain, Blockride connects car
						owners with riders and renters through a secure, smart
						contract-based environment, eliminating intermediaries and cutting
						down on fees.
					</p>
					<p className="text-gray-300 mt-4 leading-relaxed">
						With Blockride, you can book a ride, rent a car for a few hours or
						days, or even share trips with friends for more convenient and
						eco-friendly travel.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
