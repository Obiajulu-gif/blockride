"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FAQSection = () => {
  // State to manage which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
		<section
			className="relative py-20 px-8 bg-cover bg-center bg-blend-overlay text-white"
			style={{
				backgroundImage:
					"linear-gradient(to bottom right, #1F2937, #111827), url(/images/bg.png)",
			}}
		>
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center opacity-20"
				style={{ backgroundImage: "url('/images/bg.png')" }} // Ensure bg.png is in the public/images directory
			/>

			<div className="container mx-auto flex flex-col md:flex-row items-start md:items-center">
				{/* Left Side - Header */}
				<div className="w-full md:w-1/3 mb-8 md:mb-0">
					<p className="text-orange-500 uppercase tracking-wide mb-2 text-sm md:text-base">
						💼 FAQs
					</p>
					<h2 className="text-3xl md:text-4xl font-semibold">
						Got Questions? <br /> We Have Answers!
					</h2>
				</div>

				{/* Right Side - FAQ List */}
				<div className="w-full md:w-2/3">
					<div className="space-y-4">
						{/* FAQ Item 1 */}
						<div
							className="border-b border-gray-700 pb-4 cursor-pointer"
							onClick={() => toggleFAQ(1)}
						>
							<div className="flex justify-between items-center">
								<h3 className="text-lg">
									How does BlockRide ensure secure transactions?
								</h3>
								<FaPlus
									className={`transition-transform ${
										openFAQ === 1
											? "rotate-45 text-orange-500"
											: "text-orange-500"
									}`}
								/>
							</div>
							{openFAQ === 1 && (
								<p className="text-gray-400 mt-2">
									BlockRide uses blockchain technology to provide secure and
									transparent transactions. All payments are managed through
									smart contracts, ensuring a secure environment for all users.
								</p>
							)}
						</div>

						{/* FAQ Item 2 */}
						<div
							className="border-b border-gray-700 pb-4 cursor-pointer"
							onClick={() => toggleFAQ(2)}
						>
							<div className="flex justify-between items-center">
								<h3 className="text-lg">
									Can anyone list their vehicle on BlockRide?
								</h3>
								<FaPlus
									className={`transition-transform ${
										openFAQ === 2
											? "rotate-45 text-orange-500"
											: "text-orange-500"
									}`}
								/>
							</div>
							{openFAQ === 2 && (
								<p className="text-gray-400 mt-2">
									Yes, BlockRide allows verified users to list their vehicles
									for rental. Each listing goes through a quick verification
									process to ensure quality and safety.
								</p>
							)}
						</div>

						{/* FAQ Item 3 */}
						<div
							className="border-b border-gray-700 pb-4 cursor-pointer"
							onClick={() => toggleFAQ(3)}
						>
							<div className="flex justify-between items-center">
								<h3 className="text-lg">
									What are the benefits of ride-sharing?
								</h3>
								<FaPlus
									className={`transition-transform ${
										openFAQ === 3
											? "rotate-45 text-orange-500"
											: "text-orange-500"
									}`}
								/>
							</div>
							{openFAQ === 3 && (
								<p className="text-gray-400 mt-2">
									Ride-sharing with BlockRide is cost-effective and
									eco-friendly, allowing you to share costs with other riders
									while reducing carbon emissions.
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
