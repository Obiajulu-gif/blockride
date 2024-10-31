// components/dashboard/BadgeProgress.js
import React from "react";
import Image from "next/image";

const BadgeProgress = () => {
	return (
		<div className="bg-gray-800 p-4 rounded-lg">
			<Image src="/images/badge.png" alt="Badge" width={64} height={64} className="mx-auto" />
			<p className="text-gray-400 mt-2 text-center">3 Tasks Left</p>
			<div className="mt-4">
				<p className="text-sm text-gray-500 mb-2">Next Level</p>
				<p className="text-sm text-purple-500 font-semibold">Traveller</p>
			</div>
			<div className="bg-gray-700 rounded-full h-2 mt-4">
				<div className="bg-purple-600 h-2 rounded-full w-2/3"></div>
			</div>
		</div>
	);
};

export default BadgeProgress;
