import { Description } from "./pages/Description";
import { Fail } from "./pages/Fail";
import { Inicio } from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/description" element={<Description />} />

				<Route path="*" element={<Fail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
