import styles from "./fieldLayout.module.css";

export function FieldLayout({ field, makeMove, winLine }) {
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
			? `${className} ${styles.red__text}`
			: className;
	}
	console.log(field);

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
