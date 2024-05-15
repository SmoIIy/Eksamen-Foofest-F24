import { fetchData } from "../modules/functions";
import {
	apiKey,
	databaseTestEndport,
	endpoint,
	headerList,
} from "../modules/settings";
//TODO FIX AREAS AVAILABLE
//FOR LOOP MAYBE?
// const response = await fetch(databaseTestEndport, {
// 	method: "POST",
// 	headers: headerList,
// 	body: bodyContent,
// });

export default async function BookingArea() {
	const areasAvailable = Object.values(
		await fetchData(endpoint + "/available-spots"),
	).filter((key) => {
		return key.available != 0;
	});

	console.log(areasAvailable);
	async function reserveSpot(data) {
		"use server";
		const response = await fetch(endpoint + "/reserve-spot", {
			method: "PUT",
			// headers: {
			//     "Content-Type": "application/json"
			// },
			body: {
				area: data.area,
				amount: data.guests,
			},
		});
		const reserveData = await response.json();
		if (reserveData.error) {
			console.log(reserveData);
		} else {
			uploadData(data, reserveData.id);
		}
	}
	async function uploadData(data, id) {
		const response = await fetch(databaseTestEndport, {
			method: "POST",
			headers: headerList,
			body: data,
		});
		await console.log("Posting ", response, "to database", id);
	}

	async function submitForm(formData) {
		"use server";
		const rawFormData = {
			greencamping: formData.get("greencamping"),
			area: formData.get("area"),
			guests: parseInt(formData.get("guests")),
		};
		reserveSpot(rawFormData);
	}

	return (
		<form
			action={submitForm}
			className="p-8 border max-w-screen-sm flex flex-col items-center "
		>
			<div className="m-4 p-4 border">
				<label htmlFor="greencamping">Green Camping (+249)</label>
				<input type="checkbox" name="greencamping" id="greencamping" />
			</div>

			<div className="m-4 p-4 border">
				<label htmlFor="area">Area</label>
				<select className="text-black" name="area" id="area">
					{Object.values(areasAvailable).map((area) => (
						<option key={area.area} value={area.area}>
							{area.area}
						</option>
					))}
				</select>
			</div>
			<div className="m-4 p-4 border">
				<label htmlFor="guests">Guests</label>
				<input
					className="text-black"
					type="number"
					name="guests"
					id="guests"
				/>
			</div>
			<div className="m-4 p-4 border">
				<input
					className="border p-4 cursor-pointer"
					type="submit"
					value="Submit"
				/>
			</div>
		</form>
	);
}
