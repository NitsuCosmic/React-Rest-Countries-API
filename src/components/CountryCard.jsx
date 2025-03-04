import React from "react";
import { NavLink } from "react-router";

export const CountryCard = ({ country }) => {
	return (
		<div
			className={`rounded overflow-hidden shadow-md max-w-[500px] dark:bg-[hsl(209,23%,22%)] dark:text-white transition-colors`}
		>
			<NavLink to={`country/${country.name}`}>
				<img
					src={country.flag}
					alt=""
					className="w-full aspect-[16/10]"
					loading="lazy"
				/>
			</NavLink>
			<div className="p-4">
				<NavLink to={`country/${country.name}`} className="flex h-fit w-fit">
					<h2 className="font-bold text-lg hover:underline w-fit">
						{country.name}
					</h2>
				</NavLink>
				<p className="mt-4">
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
