import styles from "./gameLayout.module.css";
import { InformationContainer } from "../information/InformationContainer";
import { FieldContainer } from "../field/FieldContainer";
import PropTypes from "prop-types";

export function GameLayout({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	restart,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	winner,
	setWinner,
	winLine,
	setWinLine,
}) {
	GameLayout.propTypes = {
		field: PropTypes.arrayOf(PropTypes.string).isRequired,
		setField: PropTypes.func.isRequired,
		currentPlayer: PropTypes.string.isRequired,
		setCurrentPlayer: PropTypes.func.isRequired,
		restart: PropTypes.func.isRequired,
		isDraw: PropTypes.bool.isRequired,
		setIsDraw: PropTypes.func.isRequired,
		isGameEnded: PropTypes.bool.isRequired,
		winner: PropTypes.string.isRequired,
		setWinner: PropTypes.func.isRequired,
		winLine: PropTypes.arrayOf(PropTypes.number).isRequired,
		setWinLine: PropTypes.func.isRequired,
	};
	return (
		<>
			<div className={styles.container__table}>
				<div className={styles.container__list}>
					<div>
						<InformationContainer
							currentPlayer={currentPlayer}
							isDraw={isDraw}
							setIsDraw={setIsDraw}
							winner={winner}
						/>
					</div>
					<div>
						<FieldContainer
							field={field}
							setField={setField}
							currentPlayer={currentPlayer}
							setCurrentPlayer={setCurrentPlayer}
							isGameEnded={isGameEnded}
							setIsGameEnded={setIsGameEnded}
							setIsDraw={setIsDraw}
							winner={winner}
							setWinner={setWinner}
							winLine={winLine}
							setWinLine={setWinLine}
							isDraw={isDraw}
						/>
						<button
							className={styles.button__start_again}
							onClick={restart}
						>
							Start again
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
