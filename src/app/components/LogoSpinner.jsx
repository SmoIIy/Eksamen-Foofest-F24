// pages/index.js
import React from "react";

export default function Home() {
	return (
		<div className="flex items-center justify-center overflow-hidden">
			<div className="relative w-full h-full">
				<div className="flex overflow-hidden">
					<div className="text-white text-9xl font-extrabold uppercase whitespace-nowrap bg-black-blue flex-shrink-0 px-4 animate-scroll">
						FOOFEST 2024! FOOFEST 2024! FOOFEST 2024! FOOFEST 2024!
					</div>
					<div className="text-white text-9xl font-extrabold uppercase whitespace-nowrap bg-black-blue flex-shrink-0 px-4 animate-scroll2">
						FOOFEST 2024! FOOFEST 2024! FOOFEST 2024! FOOFEST 2024!
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes scroll {
					0% {
						transform: translateX(100%);
					}
					100% {
						transform: translateX(-100%);
					}
				}

				@keyframes scroll2 {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-200%);
					}
				}

				.animate-scroll {
					animation: scroll 160s linear infinite;
				}

				.animate-scroll2 {
					animation: scroll2 160s linear infinite;
					animation-delay: -80s;
				}
			`}</style>
		</div>
	);
}
