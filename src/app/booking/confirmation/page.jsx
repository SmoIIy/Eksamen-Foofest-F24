import { databaseTestEndport } from "@/app/modules/settings";
import Link from "next/link";

export default function Confirmation({ searchParams }) {
	const params = new URLSearchParams(searchParams);
	const finalUrl = databaseTestEndport + "?" + params;
	console.log(finalUrl, "Params ", params);
	return (
		<main className="grid p-6 md:grid-cols-2 mx-auto my-6 min-h-screen rounded-xl max-w-screen-lg gap-6 ">
			<h1>Confirmation</h1>
			<Link href="/schedule">Check out what bands are cumming!</Link>
		</main>
	);
}
