

import {useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";




console.log(typeof(data));


export default async function Landingpage() {

    const data = await fetchData(endpoint + "/bands");
    return (

        <ul>
             {Object.keys(data).map(key =>
                <li key={key}>
                    <p className="font-bold">{data[key].name}</p>
                    <p>{data[key].genre}</p>
                </li>
            )} 


            </ul>

    );
}
