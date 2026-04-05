import FieldLayout from "./FieldLayout";

export default function FieldContainer({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	isGameEnded,
	setIsDraw,
}) {
	const WIN_COMBINATIONS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	function makeMove(index) {
		if (field[index] !== "" || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;

		setField(newField);

		const winner = checkWinner(newField);
		if (winner) {
			setIsDraw(false);

			return winner;
		}

		const isDraw = newField.every((item) => item !== "");
		if (isDraw) {
			setIsDraw(true);
			return;
		}

		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
	}

	function checkWinner(field) {
		for (let combination of WIN_COMBINATIONS) {
			const [a, b, c] = combination;

			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				return field[a];
			}
		}
		return null;
	}

	return (
		<FieldLayout
			field={field}
			makeMove={makeMove}
			currentPlayer={currentPlayer}
		/>
	);
}
