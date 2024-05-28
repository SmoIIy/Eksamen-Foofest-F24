import React from "react";
import "tailwindcss/tailwind.css";

const ScrollingText = () => {
	return (
		<div className="m-scroll flex relative w-[800px] h-[600px] mx-auto bg-red-600 overflow-hidden z-10">
			<div className="m-scroll__title flex absolute top-0 left-0 items-center justify-start w-full h-full whitespace-nowrap transform scale-150 transition-all duration-1000 ease-in-out">
				<div className="flex animate-scrollText">
					<h1 className="text-9xl m-0 text-white transition-all duration-2000 ease-in-out">
						FOOFEST 2024&nbsp;
					</h1>
					<h1 className="text-9xl m-0 text-white transition-all duration-2000 ease-in-out">
						FOOFEST 2024&nbsp;
					</h1>
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
					animation: scrollText 5s infinite linear;
				}
			`}</style>
		</div>
	);
};

export default ScrollingText;
