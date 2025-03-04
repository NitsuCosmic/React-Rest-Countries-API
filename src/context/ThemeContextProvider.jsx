import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	const changeTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
