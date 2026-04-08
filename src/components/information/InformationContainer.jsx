import React from "react";
import { InformationLayout } from "./InformationLayout";

export function InformationContainer({ currentPlayer, isDraw, winner }) {
	return (
		<InformationLayout
			isDraw={isDraw}
			currentPlayer={currentPlayer}
			winner={winner}
		/>
	);
}
