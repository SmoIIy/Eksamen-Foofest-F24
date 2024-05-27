import Paymentbox from "@/app/components/Paymentbox";
import Pricebox from "@/app/components/Pricebox";
import { databaseTestEndport, headerList } from "@/app/modules/settings";

export default async function Payment({ searchParams }) {
	const params = new URLSearchParams(searchParams);
	const finalUrl = databaseTestEndport + "?" + params;
	console.log(finalUrl, "Params ", params);
	const response = await fetch(finalUrl, {
		method: "GET",
		headers: headerList,
	});
	const priceData = await response.json();
	console.log("pricedata is ", priceData);
	return (
		<main className="grid p-6 md:grid-cols-2 mx-auto my-6 rounded-xl max-w-screen-lg gap-6 ">
			<Paymentbox />
			<Pricebox props={priceData[0]} />
		</main>
	);
}
