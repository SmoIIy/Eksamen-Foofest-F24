import { fetchData } from "../modules/functions"
import { apiKey, databaseTestEndport, endpoint, headerList } from "../modules/settings"
//TODO FIX AREAS AVAILABLE
//FOR LOOP MAYBE?

export default async function BookingArea(){
    const areasAvailable = await fetchData(endpoint + "/available-spots");
    console.log(areasAvailable);
    async function reserveSpot(data){
        "use server"
        const response = await fetch((endpoint + "/reserve-spot"), {
            method: "PUT",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            body: {
                area: "data.area",
                guests: 2
            }
        })
        const reserveData = await JSON.stringify(response);
        
        console.log("Reserving: " + response);

    }


    async function submitForm(formData){
        'use server'
        const rawFormData = {
            greencamping: formData.get("greencamping"),
            area: formData.get("area"),
            guests: formData.get("guests")
            
        }

        const bodyContent = JSON.stringify(rawFormData);
        const response = await fetch(databaseTestEndport, {
            method: "POST",
            headers: headerList,
            body: bodyContent
        })
        const data = await response.json();
        console.log("bodycontent is " + bodyContent)
        console.log(data);

        reserveSpot(bodyContent);
    }


    return (
        <form action={submitForm} className="p-8 border max-w-screen-sm flex flex-col items-center ">
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
            <div className="m-4 p-4 border">
                <label htmlFor="guests">Guests</label>
                <input className="text-black" type="number" name="guests" id="guests" />
            </div>
            <div className="m-4 p-4 border">
                <input className="border p-4 cursor-pointer" type="submit" value="Submit" />
            </div>
        </form>
    )
}