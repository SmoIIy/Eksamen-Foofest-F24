import { handleReservation } from "../modules/actions";

export default function BookingPersonal({ extras, id }) {
	let extrasarray = [];
	for (let i = 1; i <= extras; i++) {
		extrasarray.push("n");
	}
	console.log("extras is ", extras, extrasarray);
	return (
		<section className="p-8 border max-w-screen-sm flex flex-col items-center rounded-lg">
			<h1>Personal Info</h1>
			<form className="border" action={handleReservation(id)}>
				<div className="flex flex-col p-4 [&>*:nth-child(even)]:mb-2">
					<label htmlFor="firstname">First Name*</label>
					<input
						className="p-2 text-black rounded-md"
						type="text"
						name="firstname"
						id="firstname"
						required
					/>
					<label htmlFor="lastname">Last Name*</label>
					<input
						className="p-2 text-black rounded-md"
						type="text"
						name="lastname"
						id="lastname"
						required
					/>
					<label htmlFor="email">Email*</label>
					<input
						className="p-2 text-black rounded-md"
						type="email"
						name="email"
						id="email"
						required
					/>
					<label htmlFor="phone">Phone Number*</label>
					<input
						className="p-2 text-black rounded-md"
						type="tel"
						name="phone"
						id="phone"
						required
					/>
					<input type="text" className="sr-only" value={id} />
					<input
						className="w-full bg-white text-black py-2 rounded-md hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
						type="submit"
						value="Submit"
					/>
				</div>
				<div>
					{extrasarray && extrasarray.length > 1 && (
						<div className="flex flex-col p-4 [&>*:nth-child(even)]:mb-2">
							<h2 className="text-lg font-bold">
								Extra persons names
							</h2>
							{extrasarray.map((nu, i) => {
								return (
									<div
										key={i}
										className="flex flex-col text-sm"
									>
										<label
											className="m-1"
											htmlFor={`extraname${i}`}
										>
											Extra person {i + 1} full name
										</label>
										<input
											required
											className="p-1 text-black rounded-md"
											type="text"
											id={`extraname${i}`}
											name={`extraname${i}`}
										/>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</form>
		</section>
	);
}
