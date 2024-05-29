import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header1 from "./components/Header1";
import Footer from "@/app/components/Footer";

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
		<html lang="en" className="min-h-full">
			<body className={`flex flex-col min-h-full ${poppins.className}`}>
				{/* <Header /> */}
				<Header1 />

				<main className="flex-grow">{children}</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
