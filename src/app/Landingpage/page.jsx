"use client"

// import { fetchData } from "../modules/functions";
import { serverEndpoint, localEndpoint } from "../modules/settings";


async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.table(data);
        return data;
    } catch (error){
        console.error(error);
    }


}
const data = fetchData(serverEndpoint + "/bands");
console.log(typeof(data));
export default function Landingpage() {

    return (
    <div>
        {Object.keys(data).map((data, index)=>
            <li key={index}>
                <p>{data.name}</p>
            </li>
        )}

        </div>
    );
}
