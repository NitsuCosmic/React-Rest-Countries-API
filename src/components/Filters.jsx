import React, { useEffect, useState } from "react";

export const Filters = ({ countries, setCountries }) => {
	const [filters, setFilters] = useState({
		region: "all",
		order: "asc",
		sortBy: "name", // Default sorting by name
	});

	const handleRegionChange = (e) => {
		setFilters((prev) => ({ ...prev, region: e.target.value }));
	};

	const handleOrderChange = (e) => {
		setFilters((prev) => ({ ...prev, order: e.target.value }));
	};

	const handleSortByChange = (e) => {
		setFilters((prev) => ({ ...prev, sortBy: e.target.value }));
	};

	useEffect(() => {
		const filterCountries = () => {
			// Always create a new copy before filtering or sorting
			let filteredCountries =
				filters.region === "all"
					? [...countries]
					: countries.filter((country) => country.region === filters.region);

			// Sorting logic (name or population)
			filteredCountries.sort((a, b) => {
				let valueA = filters.sortBy === "name" ? a.name : a.population;
				let valueB = filters.sortBy === "name" ? b.name : b.population;

				if (filters.sortBy === "name") {
					return filters.order === "asc"
						? valueA.localeCompare(valueB)
						: valueB.localeCompare(valueA);
				} else {
					return filters.order === "asc" ? valueA - valueB : valueB - valueA;
				}
			});

			setCountries(filteredCountries);
		};

		filterCountries();
	}, [filters, countries, setCountries]);

	return (
		<section className="flex items-center gap-2 flex-wrap">
			{/* Order selection */}
			<select
				onChange={handleOrderChange}
				value={filters.order}
				className="bg-white rounded p-2 shadow-lg"
			>
				<option value="asc">Ascendant</option>
				<option value="desc">Descendant</option>
			</select>

			{/* Sort by selection */}
			<select
				onChange={handleSortByChange}
				value={filters.sortBy}
				className="bg-white rounded p-2 shadow-lg"
			>
				<option value="name">Sort by Name</option>
				<option value="population">Sort by Population</option>
			</select>

			{/* Region selection */}
			<select
				onChange={handleRegionChange}
				value={filters.region}
				className="bg-white rounded p-2 shadow-lg"
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
