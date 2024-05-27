"use server";
import {
	endpoint,
	headerList,
	databaseTestEndport,
	databaseEndport,
} from "./settings";
import { redirect } from "next/navigation";
export async function handleReservation(formData) {
	let expraPersons = formData.get("extraarray");

	console.log(expraPersons);
	const rawFormData = {
		firstname: formData.get("firstname"),
		lastname: formData.get("lastname"),
		email: formData.get("email"),
		phone: formData.get("phone"),
		extrapersons: [],
	};
	for (let i = 0; i < expraPersons; i++) {
		rawFormData.extrapersons.push(formData.get(`extraname${i}`));
	}
	const id = formData.get("id");
	const responseRes = await fetch(endpoint + "/fullfill-reservation", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: {
			id: id,
		},
	});

	const resFinal = await responseRes.text();
	//console.log("resFinal is", resFinal);
	const uploadData = await fetch(databaseTestEndport + "?randomid=eq." + id, {
		method: "PATCH",
		headers: headerList,
		body: JSON.stringify(rawFormData),
	});
	const dataFinal = await uploadData.json();
	console.log(rawFormData, dataFinal);
	redirect("/booking/payment?randomid=eq." + id);
}
