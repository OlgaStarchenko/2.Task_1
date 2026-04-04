import FieldLayout from "./FieldLayout";

export default function FieldContainer({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
}) {
	function makeMove(index) {
		if (field[index] !== "") return;
		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);
		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
	}

	return (
		<FieldLayout
			field={field}
			makeMove={makeMove}
			currentPlayer={currentPlayer}
		/>
	);
}
