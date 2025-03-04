import React, { useState } from "react";
import data from "../../data.json";
import { CountryCard } from "../components/CountryCard";
import { Filters } from "../components/Filters";
import { SearchBar } from "../components/SearchBar";

export const HomePage = () => {
	const [countries, setCountries] = useState(data);
	const [countryQuery, setCountryQuery] = useState("");

	// Filter countries based on search query
	const filteredCountries = countries.filter((country) =>
		country.name.toLowerCase().includes(countryQuery.toLowerCase())
	);

	return (
		<div className="p-3 max-w-screen-2xl mx-auto">
			<section className="flex flex-wrap justify-between items-center gap-2 my-6">
				<SearchBar setCountryQuery={setCountryQuery} />
				<Filters countries={data} setCountries={setCountries} />
			</section>
			<section className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
				{/* Render filtered countries */}
				{filteredCountries.length > 0 ? (
					filteredCountries.map((country, index) => (
						<CountryCard key={index} country={country} />
					))
				) : (
					<p>No countries found.</p>
				)}
			</section>
		</div>
	);
};
