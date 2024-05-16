export default async function bookingInfo() {
	return (
		<section className="p-8 border max-w-screen-sm flex flex-col items-center rounded-lg">
			<h1>Personal Info</h1>
			<form action="">
				<div className="m-4 p-4 border flex flex-col">
					<label htmlFor="firstname">First Name</label>
					<input
						className="p-2 text-black"
						type="text"
						name="firstname"
						id="firstname"
					/>
					<label htmlFor="lastname">Last Name</label>
					<input
						className="p-2 text-black"
						type="text"
						name="lastname"
						id="lastname"
					/>
				</div>
			</form>
		</section>
	);
}
