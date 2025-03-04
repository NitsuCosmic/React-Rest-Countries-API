import React from "react";
import { useFilters } from "../hooks/useFilters";

export const Filters = ({ countries, setCountries }) => {
	const { filters, handleOrderChange, handleRegionChange, handleSortByChange } =
		useFilters(countries, setCountries);

	return (
		<section className="flex items-center gap-2 flex-wrap">
			{/* Order selection */}
			<select
				onChange={handleOrderChange}
				value={filters.order}
				className={`bg-white rounded p-2 shadow-lg dark:text-white dark:bg-[hsl(209,23%,22%)] transition-colors`}
			>
				<option value="asc">Ascendant</option>
				<option value="desc">Descendant</option>
			</select>

			{/* Sort by selection */}
			<select
				onChange={handleSortByChange}
				value={filters.sortBy}
				className={`bg-white rounded p-2 shadow-lg dark:text-white dark:bg-[hsl(209,23%,22%)] transition-colors`}
			>
				<option value="name">Sort by Name</option>
				<option value="population">Sort by Population</option>
			</select>

			{/* Region selection */}
			<select
				onChange={handleRegionChange}
				value={filters.region}
				className={`bg-white rounded p-2 shadow-lg dark:text-white dark:bg-[hsl(209,23%,22%)] transition-colors`}
			>
				<option value="all">All Regions</option>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</section>
	);
};
