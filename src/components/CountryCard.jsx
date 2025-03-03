import React from "react";

export const CountryCard = ({ country }) => {
	return (
		<div className="rounded overflow-hidden shadow-md">
			<img src={country.flag} alt="" className="w-full aspect-[16/10]" />
			<div className="p-4">
				<h2 className="font-bold text-lg mb-3">{country.name}</h2>
				<p>
					<span className="font-semibold">Population:</span>{" "}
					{country.population}
				</p>
				<p>
					<span className="font-semibold">Region:</span> {country.region}
				</p>
				<p>
					<span className="font-semibold">Capital:</span> {country.capital}
				</p>
			</div>
		</div>
	);
};
