import React from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import data from "../../data.json";
import { InfoItem } from "../components/InfoItem";
import { InfoSection } from "../components/InfoSection";
import arrowLeft from "../design/chevron-back-outline.svg";
import useThemeContext from "../hooks/useThemeContext";

export const CountryDetailsPage = () => {
	const navigate = useNavigate();
	const { countryName } = useParams();
	const { theme } = useThemeContext();

	// Find country in data
	const country = data.find(
		(c) => c.name.toLowerCase() === countryName.toLowerCase()
	);

	// Handle case where country is not found
	if (!country) {
		return (
			<div className={`text-center mt-10 dark:text-white ${theme}`}>
				<h2 className="text-xl font-bold">Country not found</h2>
				<button
					onClick={() => navigate(-1)}
					className="flex items-center gap-2 w-fit px-4 py-2 rounded shadow-md cursor-pointer bg-white hover:bg-neutral-100 transition-colors"
				>
					<img src={arrowLeft} alt="Back" className="w-6" />
					Back
				</button>
			</div>
		);
	}

	return (
		<div className="p-3 max-w-screen-2xl mx-auto">
			{/* Back Button */}
			<div className="my-6">
				<button
					onClick={() => navigate(-1)}
					className="flex items-center gap-2 w-fit px-4 py-2 rounded shadow-md cursor-pointer bg-white hover:bg-neutral-100 dark:hover:bg-[hsl(207,26%,17%)] dark:text-white dark:bg-[hsl(209,23%,22%)] transition-colors"
				>
					<img src={arrowLeft} alt="Back" className="w-6" />
					Back
				</button>
			</div>

			<section
				className={`flex flex-col gap-4 lg:flex-row lg:gap-10 dark:text-white`}
			>
				{/* Country Flag */}
				<div className="md:w-[50%]">
					<img
						src={country.flag}
						alt={`${country.name}'s Flag`}
						className="w-full h-auto"
					/>
				</div>

				{/* Country Details */}
				<article className="flex flex-col lg:justify-center">
					<h1 className="text-xl font-bold mb-6">{country.name}</h1>

					{/* Basic Info */}
					<InfoSection>
						<InfoItem label="Native Name" value={country.nativeName} />
						<InfoItem
							label="Population"
							value={country.population.toLocaleString()}
						/>
						<InfoItem label="Region" value={country.region} />
						<InfoItem label="Sub Region" value={country.subregion} />
						<InfoItem label="Capital" value={country.capital} />
					</InfoSection>

					{/* Additional Info */}
					<InfoSection>
						<InfoItem label="Top Level Domain" value={country.topLevelDomain} />
						<InfoItem
							label="Currencies"
							value={country.currencies
								.map((c) => `${c.name} (${c.code})`)
								.join(", ")}
						/>
						<InfoItem
							label="Languages"
							value={country.languages.map((lang) => lang.name).join(", ")}
						/>
					</InfoSection>

					{/* Border Countries */}
					<div className="items-center gap-4 lg:flex">
						<h2 className="text-lg font-semibold">Border Countries:</h2>
						<div className="flex flex-wrap gap-2">
							{country.borders && country.borders.length > 0 ? (
								country.borders.map((borderCode, index) => {
									const borderCountry = data.find(
										(c) => c.alpha3Code === borderCode
									);
									return borderCountry ? (
										<NavLink
											key={index}
											to={`/country/${borderCountry.name.toLowerCase()}`}
											className="w-fit px-4 py-2 rounded shadow-md cursor-pointer bg-white hover:bg-neutral-100 dark:bg-[hsl(209,23%,22%)] dark:hover:bg-[hsl(207,26%,17%)] transition-colors"
										>
											{borderCountry.name}
										</NavLink>
									) : null;
								})
							) : (
								<p>No border countries</p>
							)}
						</div>
					</div>
				</article>
			</section>
		</div>
	);
};
