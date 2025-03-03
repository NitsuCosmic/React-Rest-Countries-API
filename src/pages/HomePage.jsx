import React from "react";
import { Filters } from "../components/Filters";
import { SearchBar } from "../components/SearchBar";

export const HomePage = () => {
	return (
		<div className="p-3 max-w-screen-2xl mx-auto">
			<section className="flex justify-between items-center gap-2 my-6">
				<SearchBar />
				<Filters />
			</section>
			<section className="grid"></section>
		</div>
	);
};
