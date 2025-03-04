import React from "react";
import { NavLink } from "react-router";
import moonIcon from "../../design/moon-outline.svg";

export const NavBar = () => {
	return (
		<nav className="flex justify-between items-center p-2 max-w-screen-2xl mx-auto font-nunito">
			<NavLink to="/" className="hover:underline">
				<h2 className="font-medium">Where in the world?</h2>
			</NavLink>
			<button className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-neutral-200 transition-colors">
				<img src={moonIcon} alt="Moon icon" className="w-5" />
				Dark Mode
			</button>
		</nav>
	);
};
