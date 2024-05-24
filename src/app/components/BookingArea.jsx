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
import Image from "next/image";
import picture from "@/app/assets/logos/full-color.svg";
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
			className="p-8 max-w-screen-sm grid bg-black-blue gap-6 md:grid-cols-2 items-center [&>*]:w-full [&>*]:h-full"
		>
			<div className="[&>*]:rounded">
				<div className="my-4 p-4 border flex flex-col  ">
					<label className="label" htmlFor="area">
						Area
					</label>
					<select required className="input" name="area" id="area">
						{Object.values(areasAvailable).map((area) => (
							<option
								className="p-2"
								key={area.area}
								value={area.area}
							>
								{area.area} ({area.available} Spots left)
							</option>
						))}
					</select>
				</div>
				<div className="my-4 p-4 border flex flex-col">
					<label className="label" htmlFor="guests">
						Guests{" "}
						<span className="text-xs">(799,- per guest)</span>
					</label>
					<input
						onChange={handleGuests}
						type="number"
						required
						className="input"
						name="guests"
						id="guests"
						placeholder="Number of guests"
						min={0}
						max={10}
					></input>
					<label className="label" htmlFor="vipguests">
						VIP Guests{" "}
						<span className="text-xs">(1299,- per guest)</span>
					</label>
					<input
						onChange={handleGuests}
						type="number"
						required
						className="input"
						name="vipguests"
						id="vipguests"
						placeholder="Number of VIPs"
						min={0}
						max={10}
					></input>
				</div>
				<div className="my-4 p-4 border flex flex-col">
					<label className="label" htmlFor="tent-2">
						Setup 2 person tents{" "}
						<span className="text-xs">(299,- per)</span>
					</label>
					<input
						type="number"
						required
						className="input"
						name="tent-2"
						id="tent-2"
						placeholder="Number of tents.."
						min={0}
						max={10}
					></input>
					<label className="label" htmlFor="tent-3">
						Setup 3 person tents{" "}
						<span className="text-xs">(399,- per)</span>
					</label>
					<input
						type="number"
						required
						className="input"
						name="tent-3"
						id="tent-3"
						placeholder="Number of tents.."
						min={0}
						max={10}
					></input>
				</div>
				<div className="my-4 p-4 border items-center border-gray-200 flex rounded">
					<input
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						type="checkbox"
						name="greencamping"
						id="greencamping"
					/>
					<label
						className="w-full py-4 ms-2 text-sm font-medium text-gray-200"
						htmlFor="greencamping"
					>
						Green Camping Option(+249)
					</label>
				</div>
				<input
					aria-disabled={pending}
					className="button w-full px-4"
					type="submit"
					value="Submit"
				/>
			</div>
			<div className="grid place-items-center">
				<Image className="rotate-90" src={picture} alt="logo"></Image>
			</div>
		</form>
	);
}
