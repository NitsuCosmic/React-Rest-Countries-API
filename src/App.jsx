import { Outlet } from "react-router";
import { NavBar } from "./components/layout/NavBar";

function App() {
	return (
		<>
			<header className="shadow-md relative">
				<NavBar />
			</header>
			<main className="font-nunito bg-[hsl(0,0%,98%)] min-h-screen">
				<Outlet />
			</main>
		</>
	);
}

export default App;
