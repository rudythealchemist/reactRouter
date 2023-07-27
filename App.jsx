import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParamsComponent from "./ParamsComponent";
import Home from "./Home";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/:word" element={<ParamsComponent />} />
				<Route path="/:word/:color/:bgCol" element={<ParamsComponent />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
