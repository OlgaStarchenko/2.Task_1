import styles from "./fieldLayout.module.css";

export default function FieldLayout({ field }) {
	console.log(field);

	return <div className={styles.field__container}></div>;
}
