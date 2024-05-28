import { databaseTestEndport } from "@/app/modules/settings";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logos/full-white.svg";

export default function Confirmation() {
	return (
		<main className="grid p-6 mx-auto my-6 min-h-screen rounded-xl max-w-screen-lg gap-6 ">
			<section className="w-full bg-black-blue h-fit px-8 py-2 rounded-lg text-white">
				<header className="text-5xl font-bold pt-6 lg:pt-0 flex flex-col lg:flex-row justify-between ">
					<h1 className="self-center">Order Confirmation </h1>
					<span className="">
						<Image
							className="size-32 hidden lg:inline"
							src={logo}
							alt="logo"
						></Image>
					</span>
				</header>

				<h2 className="text-2xl mb-2">Thank You for Your Purchase!</h2>
				<article className="max-w-prose leading-relaxed">
					<p className="mb-2">
						Your ticket has been successfully processed and sent to
						your email. Get ready for an unforgettable experience at
						FooFest 2024!
					</p>
					<p>
						<span className="font-bold">Check Your Email: </span>
						Make sure to find your ticket in your inbox. If you dont
						see it, please check your spam/junk folder.
					</p>
					<p>
						<span className="font-bold">Stay Updated:</span> Click
						the buttons below to explore the festival schedule and
						band lineups. Stay informed and plan your ultimate metal
						adventure!
					</p>
				</article>
				<div className="py-4 flex gap-4">
					<Link className="button" href="/schedule">
						View Schedule
					</Link>
					<Link className="button" href="/lineup">
						Check Lineup
					</Link>
				</div>
				<p className="max-w-prose ">
					If you have any questions or need further assistance, please
					contact our support team.
				</p>
				<p className="mb-4">See you in the mosh pit!</p>
			</section>
		</main>
	);
}
