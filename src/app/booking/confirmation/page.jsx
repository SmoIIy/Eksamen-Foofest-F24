import { databaseTestEndport } from "@/app/modules/settings";
import Link from "next/link";

export default function Confirmation({ searchParams }) {
	const params = new URLSearchParams(searchParams);
	const finalUrl = databaseTestEndport + "?" + params;
	console.log(finalUrl, "Params ", params);
	return (
		<main>
			<h1>Confirmation</h1>
			<Link href="/schedule">Check out what bands are comming!</Link>
		</main>
	);
}
