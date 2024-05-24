import BookingArea from "../components/BookingArea";
import Pricebox from "../components/Pricebox";
import RedirectTest from "../components/Redirecttest";
import { fetchData } from "../modules/functions";
import { apiKey, databaseTestEndport, endpoint } from "../modules/settings";
//TODO FIX AREAS AVAILABLE
//FOR LOOP MAYBE?

export default async function Booking() {
	return (
		<main className="flex m-auto w-full justify-around">
			<BookingArea />
		</main>
	);
}
