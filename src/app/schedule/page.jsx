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

	if (scheduleLoading || bandsLoading) return <div>Loading...</div>;
	if (scheduleError || bandsError) return <div>Error loading data</div>;

	const scenes = ["Midgard", "Vanaheim", "Jotunheim"];

	return (
		<div>
			<div>
				{scenes.map((scene) => (
					<button key={scene} onClick={() => setSelectedScene(scene)}>
						{scene}
					</button>
				))}
			</div>
			<div>
				<h1>{selectedScene} Schedule</h1>
				{Object.entries(scheduleData[selectedScene]).map(
					([day, events, slug]) => (
						<div key={day}>
							<h3>{day}</h3>
							<ul>
								{events.map((event, index) => (
									<li key={index}>
										<div>
											{event.start} - {event.end}
										</div>
										{/* ---------- det er det her der driller ------ */}
										<Link
											href={`/lineup/${event.act.replace(/\s+/g, "-").toLowerCase()}`}
										>
											{event.act}
										</Link>
										{/* ---------- det er det her der driller ------ */}
										{event.cancelled ? "(Cancelled)" : ""}
									</li>
								))}
							</ul>
						</div>
					),
				)}
			</div>
		</div>
	);
}
