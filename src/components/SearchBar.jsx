import React from "react";
import searchIcon from "../design/search-outline.svg";

export const SearchBar = () => {
	return (
		<div className="flex gap-2 w-full max-w-md bg-white shadow-lg rounded-md px-4">
			<img src={searchIcon} alt="Search icon" className="w-5" />
			<input
				type="text"
				name=""
				id=""
				placeholder="Search for a country..."
				className="w-full py-3 outline-none"
			/>
		</div>
	);
};
