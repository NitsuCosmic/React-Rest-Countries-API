import React, { useState } from "react";
import resetIcon from "../design/refresh-outline.svg";
import searchIcon from "../design/search-outline.svg";

export const SearchBar = ({ setCountryQuery }) => {
	const [query, setQuery] = useState("");

	const handleClick = () => {
		setQuery("");
		setCountryQuery("");
	};

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setCountryQuery(query.trim()); // Update the query in the parent
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={`flex gap-2 w-full max-w-md bg-white shadow-lg rounded-md px-4 dark:bg-[hsl(209,23%,22%)] transition-colors`}
		>
			<img src={searchIcon} alt="Search icon" className="w-5" />
			<input
				value={query}
				onChange={handleChange}
				type="text"
				placeholder="Search for a country..."
				className={`w-full py-3 outline-none placeholder:text-neutral-400 dark:text-white dark:placeholder:text-white transition-colors`}
			/>
			<button
				type="reset"
				onClick={handleClick}
				className="cursor-pointer hover:bg-neutral-200 transition-colors"
			>
				<img src={resetIcon} alt="Reset icon" className="w-6" />
			</button>
		</form>
	);
};
