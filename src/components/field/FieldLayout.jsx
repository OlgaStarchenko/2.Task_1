import styles from "./fieldLayout.module.css";
import PropTypes from "prop-types";

export function FieldLayout({ field, makeMove, winLine, winner, isDraw }) {
	FieldLayout.propTypes = {
		field: PropTypes.arrayOf(PropTypes.string).isRequired,
		makeMove: PropTypes.func.isRequired,
		winLine: PropTypes.arrayOf(PropTypes.number).isRequired,
		winner: PropTypes.string.isRequired,
		isDraw: PropTypes.bool.isRequired,
	};

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
					className={
						isDraw
							? `${getClassName(index)} ${styles.green__text}`
							: getClassName(index)
					}
					onClick={() => makeMove(index)}
				>
					{player}
				</button>
			))}
		</div>
	);
}
