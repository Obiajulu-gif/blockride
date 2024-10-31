// components/dashboard/TaskList.js
import React from "react";

const TaskList = () => {
	const tasks = [
		{
			title: "Invite 9 People To The Platform",
			progress: 64,
			points: "6 People Invited Only",
		},
		{ title: "Complete 1000km", progress: 64, points: "320km covered only" },
		{
			title: "Spend over $200 in Fare",
			progress: 64,
			points: "Only $50 Spent",
		},
	];

	return (
		<div className="bg-gray-800 p-4 rounded-lg">
			<h3 className="text-gray-400 text-sm mb-4">Next Level</h3>
			{tasks.map((task, index) => (
				<div key={index} className="mb-4">
					<div className="flex justify-between">
						<p className="text-white text-sm">{task.title}</p>
						<p className="text-white text-sm">{task.progress}%</p>
					</div>
					<p className="text-gray-500 text-xs mb-2">{task.points}</p>
					<div className="bg-gray-700 rounded-full h-2">
						<div className="bg-purple-600 h-2 rounded-full w-2/3"></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default TaskList;
