import styles from "./informationLayout.module.css";

export function InformationLayout({ isDraw, currentPlayer, winner }) {
	return (
		<>
			<div className={styles.information__top}>
				<label className={styles.red__label}>player O</label>
				<label className={styles.blue__label}>player X</label>
			</div>

			<div className={styles.information__bottom}>
				{isDraw ? (
					<label className={styles.black__text}>Draw</label>
				) : null}

				{winner && (
					<label className={styles.black__text}>
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
