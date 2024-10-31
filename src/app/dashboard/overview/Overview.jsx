// components/dashboard/Overview.js
import React from "react";
import BadgeProgress from "./BadgeProgress";
import WalletInfo from "./WalletInfo";
import TaskList from "./TaskList";
import VideoTutorial from "./VideoTutorial";
import TripHistory from "./TripHistory";

const Overview = () => {
	return (
		<div className="p-6 space-y-6 bg-gray-900 min-h-screen">
			<h1 className="text-white text-2xl font-semibold">Welcome, David</h1>
			<div className="grid md:grid-cols-3 gap-6">
				<BadgeProgress />
				<WalletInfo />
			</div>
			<div className="grid md:grid-cols-2 gap-6">
				<VideoTutorial />
				<TripHistory />
			</div>
			<TaskList />
		</div>
	);
};

export default Overview;
