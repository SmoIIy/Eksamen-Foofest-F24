import {useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";




console.log(typeof(data));


export default async function Lineup() {

    const data = await fetchData(endpoint + "/bands");
    return (

        // <ul>
        //      {Object.keys(data).map(key =>
        //         <li key={key}>
        //             <p className="font-bold">{data[key].name}</p>
        //             <p>{data[key].genre}</p>
        //         </li>
        //     )} 
        //     </ul>
        <div>
            <h1>Lineup</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt excepturi labore error similique vel omnis? Veritatis quae nobis laudantium, architecto voluptatibus rerum iure omnis ipsum eos? Accusamus, optio quo.
            </p>
        </div>

    );
}