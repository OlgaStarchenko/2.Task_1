import styles from "./gameLayout.module.css";
import { InformationContainer } from "../information/InformationContainer";
import { FieldContainer } from "../field/FieldContainer";
import PropTypes from "prop-types";
import { Store } from "../../store";

export function GameLayout() {
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
						<InformationContainer />
					</div>
					<div>
						<FieldContainer />
						<button
							className={styles.button__start_again}
							onClick={() =>
								Store.dispatch({
									type: "RESTART_GAME",
								})
							}
						>
							Start again
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
