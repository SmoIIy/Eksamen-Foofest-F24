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

			const response = await fetch(databaseTestEndport, {
				method: "POST",
				headers: headerList,
				body: JSON.stringify(data),
			});
			//------------

			return id;
		}
		const reserveData = await response.json();

		return uploadData(rawFormData, reserveData.id);
	}

	const id = await reserveSpot(rawFormData);
	redirect("/booking/bookinginfo?randomid=eq." + id);
}
