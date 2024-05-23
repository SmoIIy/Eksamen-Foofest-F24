"use server";
import {
	endpoint,
	headerList,
	databaseTestEndport,
	databaseEndport,
} from "./settings";
import { redirect } from "next/navigation";

export async function submitForm(formData) {
	"use server";

	const rawFormData = {
		greencamping: formData.get("greencamping"),
		area: formData.get("area"),
		guests: parseInt(formData.get("guests")),
		vipguests: parseInt(formData.get("vipguests")),
		twopersontents: parseInt(formData.get("tent-2")),
		threepersontents: parseInt(formData.get("tent-3")),
	};

	async function reserveSpot(data) {
		"use server";
		const response = await fetch(endpoint + "/reserve-spot", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				area: data.area,
				amount: data.guests + data.vipguests,
			}),
		});

		async function uploadData(data, id) {
			data.randomid = id;
			console.log(data);
			const response = await fetch(databaseTestEndport, {
				method: "POST",
				headers: headerList,
				body: JSON.stringify(data),
			});
			//------------

			console.log("Posting ", await response.json(), "to database", id);
			return id;
		}
		const reserveData = await response.json();

		return uploadData(rawFormData, reserveData.id);
	}

	const id = await reserveSpot(rawFormData);
	redirect("/booking/bookinginfo?randomid=eq." + id);
}

// export const areasAvailable = Object.values(
// 	await fetchData(endpoint + "/available-spots"),
// ).filter((key) => {
// 	return key.available != 0;
// });
// export async function handleReservation(formData) {
// 	"use server";
// 	let expraPersons = [];

// 	console.log(formData.getAll(`extraname`));
// 	const rawFormData = {
// 		firstname: formData.get("firstname"),
// 		lastname: formData.get("lastname"),
// 		email: formData.get("email"),
// 		phone: formData.get("phone"),

// 	};
// 	const id = formData.get("id");
// 	const responseRes = await fetch(endpoint + "/fullfill-reservation", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: {
// 			id: id,
// 		},
// 	});
// 	const resFinal = await responseRes.text();
// 	//console.log("resFinal is", resFinal);

// 	console.log(rawFormData, id);
// 	redirect("/booking/confirmation?randomid=eq." + id);
// }
