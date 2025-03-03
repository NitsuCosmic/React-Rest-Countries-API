import { NavBar } from "./components/layout/NavBar";
import { HomePage } from "./pages/HomePage";

function App() {
	return (
		<>
			<header className="shadow-md relative">
				<NavBar />
			</header>
			<main className="font-nunito bg-[hsl(0,0%,98%)] min-h-screen">
				<HomePage />
			</main>
		</>
	);
}

export default App;
