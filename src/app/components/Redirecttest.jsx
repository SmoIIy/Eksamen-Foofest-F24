"use client";
import { redirect } from "next/navigation";

export default function RedirectTest() {
	return <button onClick={redirect("booking/bookinginfo")}>Click</button>;
}
