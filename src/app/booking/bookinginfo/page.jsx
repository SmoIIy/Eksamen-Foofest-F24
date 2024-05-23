import BookingPersonal from "@/app/components/Bookingpersonal";
import Pricebox from "@/app/components/Pricebox";
import { headerList } from "@/app/modules/settings";
import { fetchData } from "@/app/modules/functions";
import { databaseTestEndport } from "@/app/modules/settings";
export default async function bookingInfo({ searchParams }) {
	const params = new URLSearchParams(searchParams);
	const finalUrl = databaseTestEndport + "?" + params;
	console.log(finalUrl, "Params ", params);
	const response = await fetch(finalUrl, {
		method: "GET",
		headers: headerList,
	});
	const priceData = await response.json();
	console.log(priceData);

	return (
		<main className="flex m-auto w-full justify-around">
			<BookingPersonal
				extras={priceData[0].guests + priceData[0].vipguests}
			/>
			<Pricebox props={priceData[0]} />
		</main>
	);
}
