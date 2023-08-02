import { Navbar } from "../components/Navbar";
import car from "../img/autoRoto.webp";

export function Fail() {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<Navbar />
			<section className="bg-white rounded-lg shadow-lg p-8 max-w-md bg-orange-100">
				<img src={car} alt="404" className="mx-auto mb-6 rounded-lg" />
				<article className="flex flex-col justify-center content-center text-center">
					<h1 className="text-4xl font-bold text-orange-600 mb-2">
						404
					</h1>
					<h2 className="text-4xl font-semibold text-gray-800 mb-1">
						Oops! Sorry...
					</h2>
					<h3 className="text-xl text-gray-600">Page Not Found</h3>
				</article>
			</section>
		</div>
	);
}
