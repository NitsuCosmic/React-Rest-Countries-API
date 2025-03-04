import React from "react";
import { NavLink } from "react-router";

export const CountryCard = ({ country }) => {
	return (
		<div className="rounded overflow-hidden shadow-md">
			<NavLink to={`country/${country.name}`}>
				<img src={country.flag} alt="" className="w-full aspect-[16/10]" />
			</NavLink>
			<div className="p-4">
				<NavLink to={`country/${country.name}`}>
					<h2 className="font-bold text-lg mb-3 hover:underline">
						{country.name}
					</h2>
				</NavLink>
				<p>
					<span className="font-semibold">Population:</span>{" "}
					{country.population.toLocaleString()}
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
