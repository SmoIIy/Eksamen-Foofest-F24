export default function Contactdetails({ props }) {
	const extrapeople = props.extrapersons;
	return (
		<>
			<section className="text-white bg-black-blue min-w-96 shadow-md rounded-lg overflow-hidden flex flex-col [&>*+*]:ml-4 [&>*+*]:mx-4 h-fit ">
				<div className=" border-b-2 border-main-orange text-white flex items-center justify-center font-bold h-16 w-full mb-4">
					<h2 className="m-auto text-xl">Contact Details</h2>
				</div>
				<div className="border-b-2 border-main-orange space-y-2 mb-4 pb-4">
					<p className="flex justify-between">
						First Name:
						<span>{props.firstname}</span>
					</p>
					<p className="flex justify-between">
						Last Name:
						<span>{props.lastname}</span>
					</p>
					<p className="flex justify-between">
						Email:
						<span>{props.email}</span>
					</p>
					<p className="flex justify-between">
						Phone:
						<span>{props.phone}</span>
					</p>
				</div>
				<div className="border-b-2 border-main-orange mb-4 pb-4 flex items-center justify-between">
					<p className="self-start font-bold">Extra Guests</p>
					<ul className="space-y-1">
						{Object.keys(extrapeople).map((key) => (
							<li key={key}>{extrapeople[key]}</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}
