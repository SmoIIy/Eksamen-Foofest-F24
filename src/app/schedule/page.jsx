"use client";

import React, { useState } from "react";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [scheduleData, setScheduleData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDayClick = async (day) => {
        try {
            setLoading(true);
            const data = await fetchData(endpoint + `/schedule/${day}`);
            setScheduleData(data);
            setSelectedDay(day);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Test</h1>
            <div>
                <button onClick={() => handleDayClick("mon")}>Monday</button>
                <button onClick={() => handleDayClick("tue")}>Tuesday</button>
                <button onClick={() => handleDayClick("wed")}>Wednesday</button>
                <button onClick={() => handleDayClick("thu")}>Thursday</button>
                <button onClick={() => handleDayClick("fri")}>Friday</button>
                <button onClick={() => handleDayClick("sat")}>Saturday</button>
                <button onClick={() => handleDayClick("sun")}>Sunday</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {scheduleData && (
                <div>
                    <h2>Schedule for {selectedDay}</h2>
                    <ul>
                        {scheduleData.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Schedule;
