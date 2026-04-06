import React from "react";
import { InformationLayout } from "./InformationLayout";

export function InformationContainer({
	currentPlayer,
	isDraw,
	setIsDraw,
	winner,
}) {
	return (
		<InformationLayout
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			currentPlayer={currentPlayer}
			winner={winner}
		/>
	);
}
