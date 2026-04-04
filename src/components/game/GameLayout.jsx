import styles from "./gameLayout.module.css";
import InformationContainer from "../information/InformationContainer";
import FieldContainer from "../field/FieldContainer";

export default function GameLayout({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	restart,
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
						/>
					</div>
					<div>
						<FieldContainer
							field={field}
							setField={setField}
							currentPlayer={currentPlayer}
							setCurrentPlayer={setCurrentPlayer}
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
