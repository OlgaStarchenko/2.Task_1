import styles from "./gameLayout.module.css";
import { InformationContainer } from "../information/InformationContainer";
import { FieldContainer } from "../field/FieldContainer";

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
