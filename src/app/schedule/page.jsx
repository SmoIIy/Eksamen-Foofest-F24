import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";

console.log(typeof data);

export default async function Landingpage() {
    const data = await fetchData(endpoint + "/schedule");
    return (
        <div>
            <h1>Schedule</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quidem magni corrupti autem dolores at nesciunt enim quasi culpa fugit dolorem error doloribus ad. Quae nam dolore molestias cumque soluta?</p>
        </div>
    );
}
