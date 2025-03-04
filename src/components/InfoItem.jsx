import React from "react";

export const InfoItem = ({ label, value }) => (
	<p>
		<span className="font-semibold">{label}: </span>
		{value || "N/A"}
	</p>
);
