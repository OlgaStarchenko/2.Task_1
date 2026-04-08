import { FieldLayout } from "./FieldLayout";
import PropTypes from "prop-types";

export function FieldContainer({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	isGameEnded,
	setIsDraw,
	setWinner,
	winLine,
	setWinLine,
	winner,
	isDraw,
}) {
	FieldContainer.propsTypes = {
		field: PropTypes.arrayOf(PropTypes.string).isRequired,
		setField: PropTypes.func.isRequired,
		currentPlayer: PropTypes.string.isRequired,
		setCurrentPlayer: PropTypes.func.isRequired,
		setIsGameEnded: PropTypes.func.isRequired,
		setIsDraw: PropTypes.func.isRequired,
		isGameEnded: PropTypes.bool.isRequired,
		setWinner: PropTypes.func.isRequired,
		winLine: PropTypes.arrayOf(PropTypes.number).isRequired,
		setWinLine: PropTypes.func.isRequired,
		winner: PropTypes.string.isRequired,
		isDraw: PropTypes.bool.isRequired,
	};

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
			setWinner(winner);
			setIsGameEnded(true);
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
				setWinLine(combination);
				return field[a];
			}
		}
		return null;
	}

	return (
		<FieldLayout
			field={field}
			makeMove={makeMove}
			winner={winner}
			winLine={winLine}
			isDraw={isDraw}
		/>
	);
}
