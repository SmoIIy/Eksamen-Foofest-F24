"use client";
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import { useState } from "react";

const queryClient = new QueryClient();

export default function SchedulePage() {
    return (
        <QueryClientProvider client={queryClient}>
            <Schedule />
        </QueryClientProvider>
    );
}

function Schedule() {
    const [selectedScene, setSelectedScene] = useState("Midgard");

    const { data, error, isLoading } = useQuery({
        queryKey: ["schedule"],
        queryFn: () => fetchData(endpoint + "/schedule"),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading schedule</div>;

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
                {Object.entries(data[selectedScene]).map(([day, events]) => (
                    <div key={day}>
                        <h3>{day}</h3>
                        <ul>
                            {events.map((event, index) => (
                                <li key={index}>
                                    <strong>
                                        {event.start} - {event.end}
                                    </strong>
                                    : {event.act} {event.cancelled ? "(Cancelled)" : ""}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
