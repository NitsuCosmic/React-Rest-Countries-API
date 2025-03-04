import React from "react";
import { NavLink } from "react-router";

export const NotFoundPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
			<h1 className="text-5xl font-bold text-neutral-500 dark:text-neutral-300">
				404
			</h1>
			<h2 className="text-2xl font-semibold mt-2 dark:text-neutral-100">
				Page Not Found
			</h2>
			<p className="text-gray-600 mt-2 dark:text-neutral-300">
				Sorry, the page you are looking for does not exist.
			</p>
			<NavLink
				to="/"
				className="mt-6 px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-neutral-200 dark:bg-[hsl(209,23%,22%)] dark:hover:bg-[hsl(207,26%,17%)] dark:text-white transition-colors"
			>
				Go Back Home
			</NavLink>
		</div>
	);
};
