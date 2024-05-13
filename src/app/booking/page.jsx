import { fetchData } from "../modules/functions"
import { endpoint } from "../modules/settings"
//TODO FIX AREAS AVAILABLE
//FOR LOOP MAYBE?

export default async function Booking(){
    const areasAvailable = await fetchData(endpoint + "/available-spots");
    console.log(areasAvailable);


    return (
        <form action="" className="p-8 border max-w-screen-sm flex flex-col items-center">
            <div className="m-4 p-4 border">
                <label htmlFor="greencamping">Green Camping (+249)</label>
                <input type="checkbox" name="greencamping" id="greencamping" />
            </div>

            <div className="m-4 p-4 border">
                <label htmlFor="area">Area</label>
                <select className="text-black" name="area" id="area">
                    {Object.keys(areasAvailable).map(key => 
                            <option key={key} value={areasAvailable[key].area}>
                                {areasAvailable[key].area}
                            </option>
                    )} 
                </select>
            </div>
        </form>
    )
}