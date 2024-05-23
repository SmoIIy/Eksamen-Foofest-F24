"use client";

import { useState } from "react";

export default function Pricebox(props = {}) {
	console.log("Props ", props.props);
	const [vips, setVips] = useState(props.props.vipguests);
	console.log(vips);
	const [regulars, setRegulars] = useState(props.props.guests);
	const [twopers, setTwopers] = useState(props.props.twopersontents);
	const [threepers, setThreepers] = useState(props.props.threepersontents);
	const [greenCamping, setGreenCamping] = useState(props.props.greencamping);
	const fullPrice =
		greenCamping * 249 +
		regulars * 799 +
		vips * 1299 +
		twopers * 299 +
		threepers * 399 +
		99;
	return (
		<section className="text-white min-w-96 border rounded-lg overflow-hidden flex flex-col [&>*+*]:ml-4 [&>*+*]:mx-4 h-fit ">
			<div className="bg-white text-black flex items-center justify-center font-bold h-16 w-full mb-4">
				<h2 className="m-auto text-xl">Overview</h2>
			</div>
			<div className="pb-4 mb-4 border-b-2">
				<p className="">
					Area Selected: <span> {props.props.area}</span>
				</p>
				<p className="flex justify-between">
					Regular Guests: {regulars}
					<span>+{regulars * 799} DKK</span>
				</p>
				<p className="flex justify-between">
					VIP Guests: {vips} <span>+{vips * 1299} DKK </span>
				</p>
			</div>
			<div className="pb-4 mb-4 border-b-2">
				<p className="flex justify-between">
					Green Camping: {greenCamping ? "Yes" : "No"}{" "}
					<span>+{greenCamping ? "249" : "0"}DKK</span>
				</p>
				<p className="flex justify-between">
					Two Person tents: {twopers}{" "}
					<span>+{twopers * 299} DKK</span>
				</p>
				<p className="flex justify-between">
					Three Person tents: {threepers}{" "}
					<span>+{threepers * 399} DKK</span>
				</p>
			</div>
			<div className="pb-4 mb-4 border-b-2">
				<p className="flex justify-between">
					Booking Fee: <span>+99 DKK</span>
				</p>
			</div>
			<p className="flex justify-between pb-2 mb-2">
				Price: <span>{fullPrice} DKK</span>
			</p>
		</section>
	);
}
