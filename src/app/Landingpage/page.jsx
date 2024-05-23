import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import Image from "next/image";
import logoPic from "@/app/assets/logos/logo-full-color.png"

console.log(typeof data);

export default async function Landingpage() {
	const data = await fetchData(endpoint + "/bands");
	return (
<div >
	<p>COPENHAGEN, REFSHALEØEN</p>
	<Image
	src={logoPic}
	width={500}
	height={500}
	alt="FooFest logo"
	>
	</Image>


	<Image
	src="https://mgp-allstars-2009-server.glitch.me/logos/640px-GNR_London_Stadium_2017_3_(cropped).jpg"
	width={500}
	height={500}
	alt="FooFest logo2"
	>
	</Image>

	<Image
	src="http://localhost:8080/logos/640px-GNR_London_Stadium_2017_3_(cropped).jpg"
	width={500}
	height={500}
	alt="FooFest logo3"
	>
	</Image>


	<p>12 AUGUST 2024</p>
</div>
	);
}
