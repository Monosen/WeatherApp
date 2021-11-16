import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Vievs
import Home from "./views/Home/Home";
import PageMoreData from "./views/MoreData/PageMoreData";
import PageError from "./views/Error/PageError";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:code" element={<PageMoreData />} />
				<Route path="*" element={<PageError />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
