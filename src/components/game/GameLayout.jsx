import styles from "./gameLayout.module.css";
import InformationContainer from "../information/InformationContainer";
import FieldContainer from "../field/FieldContainer";

export default function GameLayout() {
	return (
		<>
			<div className={styles.container__table}>
				<div className={styles.container__list}>
					<div>
						<InformationContainer />
					</div>
					<div>
						<FieldContainer />
						<button className={styles.button__start_again}>
							Start again
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
