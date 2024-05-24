import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import Image from "next/image";
import logoPic from "@/app/assets/logos/logo-full-color.png";
import background from "@/app/assets/images/bg.png";

console.log(typeof data);

export default async function Landingpage() {
	const data = await fetchData(endpoint + "/bands");
	return (
		<div className="relative h-full">
			<Image src={background} alt="koncert"></Image>
		</div>
	);
}
