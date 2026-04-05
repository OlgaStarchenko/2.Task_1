import React from "react";
import InformationLayout from "./InformationLayout";

export default function InformationContainer({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isDraw,
	setIsDraw,
}) {
	return (
		<InformationLayout
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			currentPlayer={currentPlayer}
		/>
	);
}
