export default async function bookingInfo() {
	return (
		<section className="p-8 border max-w-screen-sm flex flex-col items-center rounded-lg">
			<h1>Personal Info</h1>
			<form className="border" action="">
				<div className="flex flex-col p-4 [&>*:nth-child(even)]:mb-2">
					<label htmlFor="firstname">First Name</label>
					<input
						className="p-2 text-black rounded-md"
						type="text"
						name="firstname"
						id="firstname"
					/>
					<label htmlFor="lastname">Last Name</label>
					<input
						className="p-2 text-black rounded-md"
						type="text"
						name="lastname"
						id="lastname"
					/>
					<label htmlFor="email">Email</label>
					<input
						className="p-2 text-black rounded-md"
						type="email"
						name="email"
						id="email"
					/>
					<label htmlFor="phone">Phone Number</label>
					<input
						className="p-2 text-black rounded-md"
						type="tel"
						name="phone"
						id="phone"
					/>

					<input
						className="w-full bg-white text-black py-2 rounded-md hover:bg-slate-800 hover:text-white transition-all"
						type="submit"
						value="Submit"
					/>
				</div>
			</form>
		</section>
	);
}
