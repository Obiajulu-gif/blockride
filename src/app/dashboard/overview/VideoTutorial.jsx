// components/dashboard/VideoTutorial.js
import React from "react";

const VideoTutorial = () => {
	return (
		<div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
			<h3 className="text-white text-lg font-semibold mb-4">
				How to use our platform
			</h3>
			<button className="bg-orange-500 text-white py-2 px-6 rounded-full">
				Watch on YouTube
			</button>
		</div>
	);
};

export default VideoTutorial;
