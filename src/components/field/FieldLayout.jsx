import styles from "./fieldLayout.module.css";

export function FieldLayout({ field, makeMove, winLine, winner }) {
	function getClassName(index) {
		let className = styles.button;
		if (index === 1 || index === 7) {
			className = `${styles.button} ${styles.border__left__right}`;
		}
		if (index === 3 || index === 5) {
			className = `${styles.button}  ${styles.border__top__bottom}  `;
		}
		if (index === 4) {
			className = `${styles.button}  ${styles.border__all}  `;
		}

		return winLine.includes(index)
			? `${className} ${winner === "O" ? styles.red__text : styles.blue__text}`
			: className;
	}

	return (
		<div className={styles.field__container}>
			{field.map((player, index) => (
				<button
					key={index}
					className={getClassName(index)}
					onClick={() => makeMove(index)}
				>
					{player}
				</button>
			))}
		</div>
	);
}
