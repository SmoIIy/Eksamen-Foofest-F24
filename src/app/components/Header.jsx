import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logos/small-color.svg";
export default function Header() {
	return (
		<header className="bg-black-blue flex w-full justify-between text-white py-4 text-center z-10 max-h-28 items-center">
			<Link className="mx-auto" href="/">
				<Image
					className="object-cover "
					height={40}
					width={45}
					src={logo}
					alt="logo"
				/>
			</Link>
			<nav className="flex justify-around m-auto w-3/12 text-grey-400 font-bold">
				<Link href="/booking">Booking</Link>
				<Link href="/schedule">Schedule</Link>
				<Link href="/lineup">Lineup</Link>
			</nav>
		</header>
	);
}
