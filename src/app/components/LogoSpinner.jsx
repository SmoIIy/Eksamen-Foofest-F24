import React from "react";
import "tailwindcss/tailwind.css";

const ScrollingText = () => {
	return (
		<div className="m-scroll flex relative w-full h-[100px] bg-red-600 overflow-hidden z-10 fixed bottom-0">
			<div className="m-scroll__title flex absolute top-0 left-0 items-center justify-start w-full h-full whitespace-nowrap transform transition-all duration-1000 ease-in-out">
				<div className="flex animate-scrollText items-center">
					<h1 className="text-9xl m-0 text-white transition-all duration-2000 ease-in-out">
						FOOFEST 2024&nbsp;
					</h1>
					<svg
						className="h-32 w-32 mx-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 148 119.33"
					>
						<defs>
							<style>{`.cls-1 { fill: #fff; }`}</style>
						</defs>
						<polygon
							className="cls-1"
							points="148 68.48 84.67 0 74 34.24 74 119.33 84.67 43 96.67 37 101.67 47 107.67 41 115.67 53 119.67 47 125.33 57.5 148 68.48"
						/>
						<polygon
							className="cls-1"
							points="0 68.48 63.33 0 74 34.24 74 119.33 63.33 43 51.33 37 46.33 47 40.33 41 32.33 53 28.33 47 22.67 57.5 0 68.48"
						/>
					</svg>
					<h1 className="text-9xl m-0 text-white transition-all duration-2000 ease-in-out">
						FOOFEST 2024&nbsp;
					</h1>
					<svg
						className="h-32 w-32 mx-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 148 119.33"
					>
						<defs>
							<style>{`.cls-1 { fill: #fff; }`}</style>
						</defs>
						<polygon
							className="cls-1"
							points="148 68.48 84.67 0 74 34.24 74 119.33 84.67 43 96.67 37 101.67 47 107.67 41 115.67 53 119.67 47 125.33 57.5 148 68.48"
						/>
						<polygon
							className="cls-1"
							points="0 68.48 63.33 0 74 34.24 74 119.33 63.33 43 51.33 37 46.33 47 40.33 41 32.33 53 28.33 47 22.67 57.5 0 68.48"
						/>
					</svg>
				</div>
			</div>

			<style jsx>{`
				@keyframes scrollText {
					from {
						transform: translateX(0%);
					}
					to {
						transform: translateX(-50%);
					}
				}

				.m-scroll__title > div {
					animation: scrollText 33s infinite linear;
				}
			`}</style>
		</div>
	);
};

export default ScrollingText;
