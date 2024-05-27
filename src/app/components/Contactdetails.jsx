export default function Contactdetails({ props }) {
	console.log("Props for contact details is ", props);
	return (
		<>
			<section className="text-white bg-black-blue min-w-96 shadow-md rounded-lg overflow-hidden flex flex-col [&>*+*]:ml-4 [&>*+*]:mx-4 h-fit ">
				<div className=" border-b-2 border-main-orange text-white flex items-center justify-center font-bold h-16 w-full mb-4">
					<h2 className="m-auto text-xl">Contact Details</h2>
				</div>
				<div className="border-b-2 border-main-orange space-y-2 mb-4 pb-4">
					<p className="flex justify-between">
						First Name:
						<span>Janus</span>
					</p>
					<p className="flex justify-between">
						Last Name:
						<span>Bardrum</span>
					</p>
					<p className="flex justify-between">
						Email:
						<span>example@example.com</span>
					</p>
					<p className="flex justify-between">
						Phone:
						<span>+45 8888 8888</span>
					</p>
				</div>
				<div className="border-b-2 border-main-orange mb-4 pb-4 flex items-center justify-between">
					<p className="font-bold self-start">Extra guests:</p>
					<div className="flex flex-col">
						<p className="">Name Namesen</p>
						<p className="">Name Namesen</p>
						<p className="">Name Namesen</p>
						<p className="">Name Namesen</p>
						<p className="">Name Namesen</p>
					</div>
				</div>
			</section>
		</>
	);
}
