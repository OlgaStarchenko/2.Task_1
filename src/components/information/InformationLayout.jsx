import styles from "./informationLayout.module.css";

export default function InformationLayout() {
	return (
		<div className={styles.information__container}>
			<label className={styles.red__label}>O player1</label>

			<label className={styles.blue__label}>X player2</label>
			<label className={styles.red__text}>0</label>
			<label className={styles.blue__text}>0</label>
		</div>
	);
}
