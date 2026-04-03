import { useState } from "react";
import GameLayout from "./GameLayout";

export function GameContainer() {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setisGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

	return <GameLayout field={field} />;
}
