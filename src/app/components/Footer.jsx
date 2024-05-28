import Link from "next/link";
import logoC from "@/app/assets/logos/small-color.svg";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-10 relative overflow-hidden">
			<div className="absolute inset-x-0 top-0 flex justify-center items-center overflow-hidden h-24">
				<p className="slide-text text-yellow-500 font-extrabold text-9xl tracking-widest flex items-center space-x-4">
					<span>FOOFEST 2024</span>
					<svg
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						width="148"
						height="119.33"
						viewBox="0 0 148 119.33"
					>
						<polygon
							style={{ strokeWidth: 0 }}
							points="148 68.48 84.67 0 74 34.24 74 119.33 84.67 43 96.67 37 101.67 47 107.67 41 115.67 53 119.67 47 125.33 57.5 148 68.48"
						/>
						<polygon
							style={{ strokeWidth: 0 }}
							points="0 68.48 63.33 0 74 34.24 74 119.33 63.33 43 51.33 37 46.33 47 40.33 41 32.33 53 28.33 47 22.67 57.5 0 68.48"
						/>
					</svg>
				</p>
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
