import React from "react";

export const Filters = () => {
	return (
		<select
			name=""
			id=""
			className="bg-white p-3 shadow-lg rounded-md outline-none cursor-pointer"
		>
			<option value="all">All</option>
			<option value="africa">Africa</option>
			<option value="america">America</option>
			<option value="asia">Asia</option>
			<option value="europe">Europe</option>
			<option value="oceania">Oceania</option>
		</select>
	);
};
