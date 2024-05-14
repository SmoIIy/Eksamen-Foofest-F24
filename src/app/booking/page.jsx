import BookingInitial from "../components/BookingInitial"
import { fetchData } from "../modules/functions"
import { apiKey, databaseTestEndport, endpoint } from "../modules/settings"
//TODO FIX AREAS AVAILABLE
//FOR LOOP MAYBE?

export default async function Booking(){
    return ( 
        <BookingInitial />
    )
}