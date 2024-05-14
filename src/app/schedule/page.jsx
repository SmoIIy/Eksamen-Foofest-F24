import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import React from "react";

export default async function Schedule() {
    const data = await fetchData(endpoint + "/schedule");
    return (
        <div>
            <h1>test</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aut ratione doloribus deserunt obcaecati beatae labore praesentium magnam quidem! Facere possimus fugit odio distinctio nemo eum autem debitis laudantium nostrum.</p>
        </div>
    );
}
