import { fetchData } from "../modules/functions";
import { serverEndport } from "../modules/settings";

const data = fetchData(serverEndport + "/bands");
console.log("data is " + Array.from(data));

export default function Landingpage() {

    return (
        <ul>
             { {
                data.map((data, index) => (
                    <li key={index}>
                        <p>{data.name}</p>
                    </li>
                ))
            }
            <li>
                <p>
                    {data.name}
                </p>
            </li>}
        </ul>
    );
}
