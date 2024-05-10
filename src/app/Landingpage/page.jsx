"use client"

// import { fetchData } from "../modules/functions";
import { serverEndpoint, localEndpoint } from "../modules/settings";

// const data = fetchData(serverEndpoint + "/bands")

// console.log(data);
async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
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
{/* {        
            data.map((data, index) => (
                <li key={index}>{data.name}</li>
            )) } */}

        </div>
    );
}
