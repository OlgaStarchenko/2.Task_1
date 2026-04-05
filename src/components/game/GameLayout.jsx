import styles from "./gameLayout.module.css";
import InformationContainer from "../information/InformationContainer";
import FieldContainer from "../field/FieldContainer";

export default function GameLayout({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	restart,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
}) {
	return (
		<>
			<div className={styles.container__table}>
				<div className={styles.container__list}>
					<div>
						<InformationContainer
							field={field}
							setField={setField}
							currentPlayer={currentPlayer}
							setCurrentPlayer={setCurrentPlayer}
							isDraw={isDraw}
							setIsDraw={setIsDraw}
							isGameEnded={isGameEnded}
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
