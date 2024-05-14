import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import React from "react";

export default async function Schedule() {
    const data = await fetchData(endpoint + "/schedule");
    return (
        <div>
            {Object.keys(data).map((location) => (
                <div key={location} className="mb-4">
                    <h2>{location}</h2>
                    <table className="border-collapse">
                        <thead>
                            <tr>
                                <th className="border py-2 px-4">Day</th>
                                <th className="border py-2 px-4">Start</th>
                                <th className="border py-2 px-4">End</th>
                                <th className="border py-2 px-4">Act</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data[location]).map((day) => (
                                <tr key={day} className="border-t">
                                    <td className="border py-2 px-4">{day}</td>
                                    {data[location][day].map((slot, index) => (
                                        <React.Fragment key={index}>
                                            <td className="border py-2 px-4">{slot.start}</td>
                                            <td className="border py-2 px-4">{slot.end}</td>
                                            <td className="border py-2 px-4">{slot.act}</td>
                                        </React.Fragment>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}
