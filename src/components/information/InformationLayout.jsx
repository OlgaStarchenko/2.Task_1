import styles from "./informationLayout.module.css";
import PropTypes from "prop-types";

export function InformationLayout({ isDraw, currentPlayer, winner }) {
	InformationLayout.propsTypes = {
		currentPlayer: PropTypes.string.isRequired,
		isDraw: PropTypes.func.isRequired,
		winner: PropTypes.string.isRequired,
	};

	return (
		<>
			<div className={styles.information__title}>
				<p>
					{" "}
					<span className={styles.blue__text}>TIC</span>{" "}
					<span className={styles.red__text}>TAC</span>{" "}
					<span className={styles.black__text}>TOE</span>{" "}
				</p>
			</div>

			<div className={styles.information__message}>
				{isDraw ? (
					<label className={styles.green__text}>Draw</label>
				) : null}

				{winner && (
					<label
						className={
							winner === "O"
								? styles.red__text
								: styles.blue__text
						}
					>
						{`Win player ${currentPlayer}!`}
					</label>
				)}

				{!winner && !isDraw ? (
					<label
						className={styles.black__text}
					>{`Walks player ${currentPlayer}...`}</label>
				) : null}
			</div>
		</>
	);
}
