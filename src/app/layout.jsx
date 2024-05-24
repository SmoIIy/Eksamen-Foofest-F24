import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";

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
			<body className={`flex flex-col min-h-screen ${poppins.className}`}>
				<Header />

				<main className="flex-grow">{children}</main>
				<footer className="bg-black-blue text-white py-4 text-center absolute bottom-0 w-full">
					<p>FooFest 2024</p>
				</footer>
			</body>
		</html>
	);
}
