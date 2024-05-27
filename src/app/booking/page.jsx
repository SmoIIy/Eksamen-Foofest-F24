import BookingArea from "../components/BookingArea";
import Pricebox from "../components/Pricebox";
import RedirectTest from "../components/Redirecttest";
import picture from "@/app/assets/logos/full-color.svg";
import Image from "next/image";
import { fetchData } from "../modules/functions";
import { apiKey, databaseTestEndport, endpoint } from "../modules/settings";
//TODO FIX AREAS AVAILABLE
//FOR LOOP MAYBE?

export default async function Booking() {
	return (
		<main className="grid p-6 md:grid-cols-2 mx-auto my-6 rounded-xl max-w-screen-lg w gap-6 justify-around">
			<div className="text-white flex flex-col items-center p-4 bg-black-blue rounded-lg grow-0">
				<article className="grow">
					<h2 className="font-bold text-lg text-center w-full">
						Practical Information
					</h2>
					<p className="max-w-prose ">
						Choose which campingsite you want to camp at, how many
						guests are gonna be present, as well as other
						information. You will enter personal information on the
						next page.
					</p>
					<p>
						Please note that a service fee of 99,- will be added to
						the final price, regardless of the amount of tickets
						chosen.
					</p>
				</article>
				<Image className="my-4" src={picture} alt="logo"></Image>
			</div>
			<BookingArea />
		</main>
	);
}
