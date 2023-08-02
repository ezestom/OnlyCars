import { Navbar } from "../components/Navbar";
import { Partner } from "../components/Partner";
import logo from '../img/logoOnlyCars.png'

export function Partners() {
	return (
		<>
			{"../"}
			<Navbar />

			<section className=" flex justify-center content-center flex-wrap  w-screen">
				<h1 className="text-4xl flex font-bold w-full text-gray-900 dark:text-white content-center justify-center underline">
					DigitalPartners
					<img src={logo} alt="" className="w-20 pl-3" />
				</h1>
				<article className="max-w-screen-xl gap-10">
					<Partner />
					<Partner />
					<Partner />
					<Partner />
					<Partner />
					<Partner />
					<Partner />
					<Partner />
					<Partner />
				</article>
			</section>
		</>
	);
}
