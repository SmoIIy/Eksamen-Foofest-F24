import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/modules/functions";
import { endpoint } from "@/app/modules/settings";
import Image from "next/image";
import logoPic from "@/app/assets/logos/full-black.svg";
import background from "@/app/assets/images/bg.png";
import Heroimage from "../components/Heroimage";

export default async function Landingpage() {
	return (
		<div className="grid place-items-center grid-cols-1">
			<Image
				className="col-start-1 row-start-1"
				src={background}
				alt="koncert"
			></Image>
			<section className="col-start-1 row-start-1 flex flex-col items-center">
				<h1 className="sr-only">FooFest 2024</h1>
				<h2 className="uppercase font-bold text-dark-purple">
					Copenhagen, Refshaløen
				</h2>
				<Image
					className=""
					src={logoPic}
					alt="logo"
					height={200}
				></Image>
				<p className="uppercase font-semibold">12 August 2024</p>
			</section>
		</div>
	);
}
