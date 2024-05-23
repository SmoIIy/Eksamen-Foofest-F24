import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";

console.log(typeof data);

export default async function Landingpage() {
	const data = await fetchData(endpoint + "/bands");
	return (
		<div>
			<h1>Hej</h1>
			<p>dinmor</p>
		</div>
	);
}
