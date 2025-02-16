import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PathNotFound from "./ui/PathNotFound";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to="home" />} />
						<Route path="home" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="services" element={<Services />} />
						<Route path="contact" element={<Contact />} />
						{/* Catch-all route for "not found" */}
						<Route path="*" element={<PathNotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
