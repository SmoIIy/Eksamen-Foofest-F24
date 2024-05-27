"use client";
import React, { useState } from "react";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import Link from "next/link";
import logoWall from "@/app/assets/logos/logowall.svg";
import Image from "next/image";

const queryClient = new QueryClient();

export default function SchedulePage({}) {
	return (
		<QueryClientProvider client={queryClient}>
			<Schedule />
		</QueryClientProvider>
	);
}

function Schedule() {
	const [selectedScene, setSelectedScene] = useState("Midgard");

	const {
		data: scheduleData,
		error: scheduleError,
		isLoading: scheduleLoading,
	} = useQuery({
		queryKey: ["schedule"],
		queryFn: () => fetchData(endpoint + "/schedule"),
	});
	console.log(scheduleData);

	const {
		data: bandsData,
		error: bandsError,
		isLoading: bandsLoading,
	} = useQuery({
		queryKey: ["bands"],
		queryFn: () => fetchData(endpoint + "/bands"),
	});

	if (scheduleLoading || bandsLoading)
		return <div className="text-center text-white">Loading...</div>;
	if (scheduleError || bandsError)
		return (
			<div className="text-center text-red-500">Error loading data</div>
		);

	const scenes = ["Midgard", "Vanaheim", "Jotunheim"];

	return (
		<div className="text-white m-4">
			<div className="flex justify-center mb-6 space-x-4">
				{scenes.map((scene) => (
					<button
						key={scene}
						onClick={() => setSelectedScene(scene)}
						className={`px-4 py-2 rounded ${selectedScene === scene ? "bg-main-orange" : "bg-main-yellow hover:bg-main-orange"}`}
					>
						{scene}
					</button>
				))}
			</div>
			<h1 className="text-center text-3xl font-bold mb-4">
				{selectedScene} Schedule
			</h1>
			<div className="grid md:grid-cols-2">
				<div>
					{Object.entries(scheduleData[selectedScene]).map(
						([day, events]) => (
							<div key={day} className="mb-6">
								<h3 className="font-bold text-2xl mb-2">
									{day}
								</h3>
								<ul className="space-y-4">
									{events.map((event, index) => (
										<li
											key={index}
											className="p-4 bg-dark-blue rounded-lg shadow max-w-screen-lg"
										>
											<div className="text-lg mb-2">
												{event.start} - {event.end}
											</div>
											<Link
												href={`/lineup/${event.act.replace(/\s+/g, "-").toLowerCase()}`}
												className="text-2xl font-bold text-white hover:text-light-purple"
											>
												{event.act}
											</Link>
											{event.cancelled ? (
												<span className="text-red-500 ml-2">
													(Cancelled)
												</span>
											) : (
												""
											)}
										</li>
									))}
								</ul>
							</div>
						),
					)}
				</div>
				<div className=""></div>
			</div>
		</div>
	);
}
