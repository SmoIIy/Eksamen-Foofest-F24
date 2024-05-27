import BookingPersonal from "@/app/components/Bookingpersonal";
import Pricebox from "@/app/components/Pricebox";
import { headerList } from "@/app/modules/settings";
import { fetchData } from "@/app/modules/functions";
import Image from "next/image";
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
	console.log("pricedata is ", priceData);

	return (
		<main className="grid p-6 md:grid-cols-2 mx-auto my-6 rounded-xl max-w-screen-lg w gap-6 justify-around">
			<BookingPersonal
				extras={priceData[0].guests + priceData[0].vipguests}
				id={priceData[0].randomid}
			/>
			<div className="flex flex-col">
				<Pricebox props={priceData[0]} />
				<article className="bg-black-blue mt-6 rounded-lg text-white p-4">
					<h2 className="text-xl text-center font-bold">Payment</h2>
					<div class="my-6 flex items-center justify-center gap-8">
						<Image
							className="h-8 w-auto"
							src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
							width={100}
							height={100}
							alt=""
						/>

						<Image
							className="h-8 w-auto"
							src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
							width={100}
							height={100}
							alt=""
						/>
						<Image
							className="h-8 w-auto dark:flex"
							src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
							width={100}
							height={100}
							alt=""
						/>
					</div>
				</article>
			</div>
		</main>
	);
}
