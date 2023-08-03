import { Footer } from "../components/Footer";
import { Mobile } from "../components/Mobile";
import { Navbar } from "../components/Navbar";
import { Youtube } from "../components/Youtube";

export function Recomendation() {
	return (
		<>
			<Navbar />
			<section className="">
            <Youtube />
				<Mobile />
			</section>
			<Footer />
		</>
	);
}
