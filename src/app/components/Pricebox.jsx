"use client";

import { useState } from "react";

export default function Pricebox(props) {
	const [vips, setVips] = useState(0 * 1299);
	const [regulars, setRegulars] = useState(0 * 799);
	const [twopers, setTwopers] = useState(0 * 199);
	const [threepers, setThreepers] = useState(0 * 299);

	return (
		<section className="text-white min-w-72 border rounded-lg overflow-hidden flex flex-col [&>*+*]:ml-4 [&>*+*]:mx-4 h-fit ">
			<div className="bg-white text-black flex items-center justify-center font-bold h-16 w-full mb-4">
				<h2 className="m-auto">Overview</h2>
			</div>
			<div className="pb-4 mb-4 border-b-2">
				<p className="flex justify-between">
					Area Selected: <span>Area</span>
				</p>
				<p className="flex justify-between">
					Regular Guests: <span>0 DKK</span>
				</p>
				<p className="flex justify-between">
					VIP Guests: {vips} <span>{vips * 1299} DKK </span>
				</p>
			</div>
			<div className="pb-4 mb-4 border-b-2">
				<p className="flex justify-between">
					Green Camping: Yes <span>+99 DKK</span>
				</p>
				<p className="flex justify-between">
					Two Person tents: 0 <span>+199 DKK</span>
				</p>
				<p className="flex justify-between">
					Three Person tents: 0 <span>+299 DKK</span>
				</p>
			</div>
			<p className="flex justify-between">
				Price: <span>{vips + regulars + twopers + threepers}</span>
			</p>
			<button onClick={() => setVips(vips + 1)}>Click</button>
		</section>
	);
}
