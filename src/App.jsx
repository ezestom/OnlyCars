import { Description } from "./pages/Description";
import { Fail } from "./pages/Fail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Partners } from "./pages/Partners";
import { Home } from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/description" element={<Description />} />
        <Route path="/partners" element={<Partners />} />

				<Route path="*" element={<Fail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
