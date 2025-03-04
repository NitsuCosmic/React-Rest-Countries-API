import { useEffect, useState } from "react";

export const useFilters = (countries, setCountries) => {
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

	return { filters, handleRegionChange, handleSortByChange, handleOrderChange };
};
