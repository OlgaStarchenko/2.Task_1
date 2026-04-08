import { useState } from "react";
import { GameLayout } from "./GameLayout";

export function GameContainer() {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [winner, setWinner] = useState(null);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
	const [winLine, setWinLine] = useState([]);

	function restart() {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(["", "", "", "", "", "", "", "", ""]);
		setWinner(null);
		setWinLine([]);
	}
	return (
		<GameLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			restart={restart}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			winner={winner}
			setWinner={setWinner}
			winLine={winLine}
			setWinLine={setWinLine}
		/>
	);
}
