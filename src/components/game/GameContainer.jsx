import { useState } from "react";
import GameLayout from "./GameLayout";

export function GameContainer() {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setisGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

	function restart() {
		setField(["", "", "", "", "", "", "", "", ""]);
	}
	return (
		<GameLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			restart={restart}
		/>
	);
}
