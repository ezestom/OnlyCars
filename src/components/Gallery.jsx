import { useState } from "react";
import logo from "../img/logoOnlyCars.png";
import ferrari1 from "../img/ferrari1.jpg";
import ferrari2 from "../img/ferrari2.avif";
import ferrari3 from "../img/ferrari3.avif";
import ferrari4 from "../img/ferrari4.jpg";
import "./gallery.css";

export function Gallery() {
	const [currentIndex, setCurrentIndex] = useState(0);

	function showPreviousImage() {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + sliderImages.length) % sliderImages.length
		);
	}

	function showNextImage() {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
	}

	const sliderImages = [
		{ src: ferrari1, alt: "Ferrari 1" },
		{ src: ferrari2, alt: "Ferrari 2" },
		{ src: ferrari3, alt: "Ferrari 3" },
		{ src: ferrari4, alt: "Ferrari 4" },
	];

	return (
		<section className="shadow-lg rounded-gl p-5">
			<article className="buttons-box">
				<button
					className="button buttonBack"
					type="button"
					onClick={showPreviousImage}>
					<img className="button-image" src={logo} alt="logo" />
					<span>Back</span>
				</button>
				<button
					className="button buttonNext"
					type="button"
					onClick={showNextImage}>
					<img className="button-image" src={logo} alt="logo" />
					<span>Next</span>
				</button>
			</article>
			<article className="sliders">
				<div className="slider">
					{sliderImages.map((image, index) => (
						<img
							key={index}
							src={image.src}
							alt={image.alt}
							style={{
								display:
									index === currentIndex ? "block" : "none",
							}}
						/>
					))}
				</div>
			</article>
			<article>
				<div className="flex mt-5 items-center justify-center">
					<svg
						className="w-4 h-4 text-yellow-300 mr-1"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 22 20">
						<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
					</svg>
					<p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
						4.95
					</p>
					<span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
					<a
						href="#"
						className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
						73 reviews
					</a>
				</div>
			</article>
		</section>
	);
}
