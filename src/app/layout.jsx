import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata = {
	title: "Foo Fest festival 2024",
	description:
		"Foo Fest Metal festival 2024, the biggest festival with the biggest names of all time.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full">
			<body
				className={`flex flex-col min-h-screen h-full ${poppins.className}`}
			>
				<div className="flex-grow flex flex-col">
					<header className="bg-black-blue text-white py-4 text-center">
						<nav className="flex justify-around max-w-xl m-auto">
							<Link href="/">Home</Link>
							<Link href="/booking">Booking</Link>
							<Link href="/schedule">Schedule</Link>
							<Link href="/lineup">Lineup</Link>
						</nav>
					</header>

					<main className="flex-grow">{children}</main>
				</div>

				<footer className="bg-black-blue text-white py-4 text-center">
					<p>FooFest 2024</p>
				</footer>
			</body>
		</html>
	);
}
