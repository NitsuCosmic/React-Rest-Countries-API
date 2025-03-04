import { Outlet } from "react-router";
import { NavBar } from "./components/layout/NavBar";
import useThemeContext from "./hooks/useThemeContext";

function App() {
	const { theme } = useThemeContext();

	return (
		<>
			<header
				className={`shadow-md relative bg-white dark:bg-[hsl(209,23%,22%)] dark:text-white transition-colors ${theme}`}
			>
				<NavBar />
			</header>
			<main
				className={`font-nunito min-h-screen bg-[hsl(0,0%,98%)] dark:bg-[hsl(207,26%,17%)] transition-colors ${theme}`}
			>
				<Outlet />
			</main>
		</>
	);
}

export default App;
