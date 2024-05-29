import React from "react";
import Link from "next/link";

export default function Jumbotron() {
	return (
		<section>
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
				<div className="bg-black-blue border border-dark-blue rounded-lg p-8 md:p-12 mb-8">
					<h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">
						Book your tickets here!
					</h1>
					<p className="text-lg font-normal text-gray-00 mb-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vero, iusto vel doloribus fuga repudiandae quibusdam
						tempore praesentium inventore enim id voluptatibus
						cumque ratione eum, voluptas quasi quos, recusandae
						obcaecati placeat!
					</p>

					<Link
						className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black-blue rounded-lg bg-main-yellow hover:bg-black-blue hover:border-main-yellow hover:text-main-yellow border-2 border-main-yellow focus:ring-4 focus:ring-blue-900"
						href="/booking"
					>
						Booking{" "}
						<svg
							className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>{" "}
					</Link>
				</div>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="bg-black-blue border border-dark-blue rounded-lg p-8 md:p-12">
						<h2 className=" text-white text-3xl font-extrabold mb-2">
							See our amazing lineup
						</h2>
						<p className="text-lg font-normal text-gray-400 mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Obcaecati doloremque, ullam id ad consectetur
							numquam temporibus quia quas, voluptatem veritatis
							natus unde autem fugit libero minus alias incidunt
							exercitationem aut.
						</p>
						<Link
							className=" text-main-yellow hover:underline font-medium text-lg inline-flex items-center"
							href="/lineup"
						>
							Go to lineup
						</Link>
					</div>
					<div className="bg-black-blue border border-dark-blue rounded-lg p-8 md:p-12">
						<h2 className=" text-white text-3xl font-extrabold mb-2">
							Who plays where and what time?
						</h2>
						<p className="text-lg font-normal text-gray-400 mb-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Perferendis cupiditate ipsum fuga eos
							repudiandae, illo omnis iste ratione quidem
							voluptatum odio aliquid ipsam atque possimus. Sed
							similique deserunt quasi ipsam.
						</p>
						<Link
							className=" text-main-yellow hover:underline font-medium text-lg inline-flex items-center"
							href="/schedule"
						>
							Go to schedule
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
