import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import { ThemeContextProvider } from "./context/ThemeContextProvider.jsx";
import "./index.css";
import { CountryDetailsPage } from "./pages/CountryDetailsPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

createRoot(document.getElementById("root")).render(
	<ThemeContextProvider>
		<BrowserRouter>
			<StrictMode>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<HomePage />} />
						<Route
							path="country/:countryName"
							element={<CountryDetailsPage />}
						/>
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</StrictMode>
		</BrowserRouter>
	</ThemeContextProvider>
);
