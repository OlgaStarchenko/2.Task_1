import styles from "./fieldLayout.module.css";

export default function FieldLayout() {
	return (
		<div className={styles.field__container}>
			<button className={styles.button}>O</button>
			<button
				className={`${styles.button} ${styles.border__left__right}`}
			>
				0
			</button>
			<button className={styles.button}>X</button>
			<button
				className={`${styles.button}  ${styles.border__top__bottom}  `}
			>
				X
			</button>
			<button className={`${styles.button}  ${styles.border__all}  `}>
				0
			</button>
			<button
				className={`${styles.button}  ${styles.border__top__bottom}  `}
			>
				O
			</button>
			<button className={styles.button}>0</button>
			<button
				className={`${styles.button} ${styles.border__left__right}`}
			>
				X
			</button>
			<button className={styles.button}>0</button>
		</div>
	);
}
