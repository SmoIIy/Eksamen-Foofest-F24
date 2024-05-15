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
			twopersontents: parseInt(formData.get("tent-2")),
			threepersontents: parseInt(formData.get("tent-3")),
		};
		reserveSpot(rawFormData);
	}

	return (
		<form
			action={submitForm}
			className="p-8 border max-w-screen-sm flex flex-col items-center "
		>
			<div className="m-4 p-4 border flex flex-col">
				<label htmlFor="greencamping">Green Camping (+249)</label>
				<input type="checkbox" name="greencamping" id="greencamping" />
			</div>

			<div className="m-4 p-4 border flex flex-col">
				<label htmlFor="area">Area</label>
				<select className="text-black" name="area" id="area">
					{Object.values(areasAvailable).map((area) => (
						<option
							className="p-2"
							key={area.area}
							value={area.area}
						>
							{area.area}
						</option>
					))}
				</select>
			</div>
			<div className="m-4 p-4 border flex flex-col">
				<label htmlFor="guests">Guests</label>
				<input
					placeholder="Input number of guests"
					className="text-black p-2"
					type="number"
					name="guests"
					id="guests"
				/>
			</div>
			<div className="m-4 p-4 border">
				<fieldset>
					<legend className="flex flex-col">
						<label htmlFor="tent-2">Setup 2 person tents</label>
						<select
							className="text-black [&>*]:p-2"
							name="tent-2"
							id="tent-2"
						>
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
						<label htmlFor="tent-3">Setup 3 person tents</label>
						<select
							className="text-black [&>*]:p-2"
							name="tent-3"
							id="tent-3"
						>
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</legend>
				</fieldset>
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