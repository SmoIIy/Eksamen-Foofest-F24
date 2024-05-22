"use client";
import { redirect } from "next/navigation";
import { fetchData } from "../modules/functions";
import { useFormStatus } from "react-dom";
import {
	apiKey,
	databaseTestEndport,
	endpoint,
	headerList,
} from "../modules/settings";
import { areasAvailable, submitForm } from "../modules/actions";
import { useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";
//TODO FIX AREAS AVAILABLE
//FOR LOOP MAYBE?
// const response = await fetch(databaseTestEndport, {
// 	method: "POST",
// 	headers: headerList,
// 	body: bodyContent,
// });

export default function BookingArea() {
	// const areasAvailable = Object.values(
	// 	fetchData(endpoint + "/available-spots"),
	// ).filter((key) => {
	// 	return key.available != 0;
	// });
	const [stateendpoint] = useState(endpoint);
	const [areasAvailable, setAreasAvailable] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [guestTentsMatch, setGuestTentsMatch] = useState(false);
	const [guests, setGuests] = useState(0);
	const [vips, setVips] = useState(0);
	const [twopers, setTwopers] = useState(0);
	const [threepers, setthreepers] = useState(0);

	function handleGuests(e) {
		setGuests(parseInt(e.target.value));
		console.log(typeof guests, guests);
	}
	function checkGuests() {
		if (guests + vips + threepers * 3 + twopers * 2) {
			setGuestTentsMatch(true);
			console.log(
				guestTentsMatch,
				"Total is",
				guests + vips + threepers * 3 + twopers * 2,
			);
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true); // Set loading state to true (optional)
			try {
				const response = await fetch(
					stateendpoint + "/available-spots",
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				const filteredAreas = Object.values(data).filter(
					(area) => area.available !== 0,
				);
				console.log(filteredAreas);
				setAreasAvailable(filteredAreas);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();

		return () => {};
	}, [stateendpoint]);
	const { pending } = useFormStatus();
	return (
		<form
			onChange={checkGuests}
			action={submitForm}
			className="p-8 border max-w-screen-sm flex flex-col items-center [&>*]:w-full"
		>
			<div className="m-4 p-4 border flex flex-col ">
				<label htmlFor="area">Area</label>
				<select required className="text-black" name="area" id="area">
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
				<label htmlFor="guests">
					Guests <span className="text-xs">(799,- per guest)</span>
				</label>
				<input
					onChange={handleGuests}
					type="number"
					required
					className="text-black mb-2"
					name="guests"
					id="guests"
					placeholder="Number of guests"
					min={0}
					max={10}
				></input>
				<label htmlFor="vipguests">
					VIP Guests{" "}
					<span className="text-xs">(1299,- per guest)</span>
				</label>
				<input
					onChange={handleGuests}
					type="number"
					required
					className="text-black mb-2"
					name="vipguests"
					id="vipguests"
					placeholder="Number of VIPs"
					min={0}
					max={10}
				></input>
			</div>
			<div className="m-4 p-4 border">
				<fieldset>
					<legend className="flex flex-col">
						<label htmlFor="tent-2">Setup 2 person tents</label>
						<input
							type="number"
							required
							className="text-black "
							name="tent-2"
							id="tent-2"
							placeholder="Number of tents.."
							min={0}
							max={10}
						></input>
						<label htmlFor="tent-3">Setup 3 person tents</label>
						<input
							type="number"
							required
							className="text-black "
							name="tent-3"
							id="tent-3"
							placeholder="Number of tents.."
							min={0}
							max={10}
						></input>
					</legend>
				</fieldset>
			</div>
			<div className="m-4 p-4 border flex flex-col">
				<label htmlFor="greencamping">Green Camping (+249)</label>
				<input type="checkbox" name="greencamping" id="greencamping" />
			</div>

			<input
				aria-disabled={pending}
				className="border p-4 cursor-pointer"
				type="submit"
				value="Submit"
			/>
		</form>
	);
}
