
import { Footer } from "../components/Footer.jsx";
import { Main } from "../components/Main.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { Search } from "../components/Search.jsx";

export function Home(){
   return (
		<>
			<Navbar />
			<Search />
         <Main />
			<Footer />
		</>
   );
}