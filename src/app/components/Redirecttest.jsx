"use server";
import { redirect } from "next/navigation";

export default async function RedirectTest() {
	return (
		<div>
			<button onClick={redirect("booking/bookinginfo")}>Click</button>
		</div>
	);
}
