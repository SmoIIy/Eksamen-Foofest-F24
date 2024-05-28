"use client";

import Link from "next/link";
import logoC from "@/app/assets/logos/small-color.svg";
import Image from "next/image";
import LogoSpinner from "@/app/components/LogoSpinner";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-10 relative overflow-hidden">
			<div>
				<LogoSpinner></LogoSpinner>
			</div>

			<div className="container mx-auto px-6 mt-24">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-center md:text-left mb-6 md:mb-0">
						<h1 className="text-yellow-500 text-4xl font-semibold tracking-tight">
							FooFest
						</h1>
						<p className="text-gray-400 mt-3">
							The Ultimate Metal Festival Experience
						</p>
					</div>
					<nav className="flex space-x-8">
						<Link
							href="/"
							className="text-gray-400 hover:text-yellow-500 transition-colors"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="text-gray-400 hover:text-yellow-500 transition-colors"
						>
							About
						</Link>
						<Link
							href="/lineup"
							className="text-gray-400 hover:text-yellow-500 transition-colors"
						>
							Lineup
						</Link>
						<Link
							href="/contact"
							className="text-gray-400 hover:text-yellow-500 transition-colors"
						>
							Contact
						</Link>
					</nav>
				</div>
				<div className="mt-10 text-center text-gray-500">
					<p>
						&copy; {new Date().getFullYear()} FooFest. All Rights
						Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
