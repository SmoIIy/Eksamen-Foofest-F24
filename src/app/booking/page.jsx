import BookingArea from "../components/BookingArea";
import RedirectTest from "../components/Redirecttest";
import { fetchData } from "../modules/functions";
import { apiKey, databaseTestEndport, endpoint } from "../modules/settings";
//TODO FIX AREAS AVAILABLE
//FOR LOOP MAYBE?

export default async function Booking() {
	return (
		<>
			<BookingArea />
		</>
	);
}
