import styles from "./informationLayout.module.css";

export default function InformationLayout({
	isDraw,
	currentPlayer,
	isGameEnded,
}) {
	return (
		<>
			<div className={styles.information__top}>
				<label className={styles.red__label}>player O</label>
				<label className={styles.blue__label}>player X</label>
			</div>

			<div className={styles.information__bottom}>
				{isDraw && <label className={styles.black__text}>Draw</label>}

				{!isDraw && isGameEnded ? (
					<label className={styles.black__text}>
						{`Win player ${currentPlayer}!`}
					</label>
				) : null}

				{!isGameEnded && !isDraw ? (
					<label
						className={styles.black__text}
					>{`Walks player ${currentPlayer}...`}</label>
				) : null}
			</div>
		</>
	);
}
