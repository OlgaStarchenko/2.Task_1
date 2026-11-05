import { useAppStore } from "../../my-redux/useAppStore";
import { Store } from "../../store";
import { FieldLayout } from "./FieldLayout";
import PropTypes from "prop-types";

export function FieldContainer() {
	const state = useAppStore();

	FieldContainer.propTypes = {
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

	const { field, isGameEnded, currentPlayer } = state;

	function makeMove(index) {
		if (field[index] !== "" || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;

		Store.dispatch({
			type: "SET_FIELD",
			payload: newField,
		});

		const winner = checkWinner(newField);
		if (winner) {
			Store.dispatch({
				type: "SET_WINNER",
				payload: winner,
			});

			Store.dispatch({
				type: "SET_IS_GAME_ENDED",
				payload: true,
			});

			Store.dispatch({
				type: "SET_IS_DRAW",
				payload: false,
			});

			return winner;
		}

		const isDraw = newField.every((item) => item !== "");
		if (isDraw) {
			Store.dispatch({
				type: "SET_IS_DRAW",
				payload: true,
			});

			return;
		}

		Store.dispatch({
			type: "SET_CURRENT_PLAYER",
			payload: currentPlayer === "X" ? "O" : "X",
		});
	}

	function checkWinner(field) {
		for (let combination of WIN_COMBINATIONS) {
			const [a, b, c] = combination;

			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				Store.dispatch({
					type: "SET_WIN_LINE",
					payload: combination,
				});

				return field[a];
			}
		}
		return null;
	}

	return <FieldLayout makeMove={makeMove} />;
}
