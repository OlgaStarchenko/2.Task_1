import styles from "./informationLayout.module.css";

export function InformationLayout({ isDraw, currentPlayer, winner }) {
	return (
		<>
			<div className={styles.information__title}>
				<p>TIC TAC TOE</p>
			</div>

			<div className={styles.information__message}>
				{isDraw ? (
					<label className={styles.black__text}>Draw</label>
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
