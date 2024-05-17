import {useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import BandCard from "@/app/components/BandCard";




console.log(typeof(data));


export default async function Lineup() {

    const data = await fetchData(endpoint + "/bands");
    return (
<ul>
     {Object.keys(data).map(key =>
                <li key={key}>
                <BandCard name={data[key].name} img={data[key].logo}/>
                </li>
            )} 
</ul>


)
    }

