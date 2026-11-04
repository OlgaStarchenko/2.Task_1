import PropTypes from "prop-types";
import { InformationLayout } from "./InformationLayout";

export function InformationContainer() {
	InformationContainer.propsTypes = {
		currentPlayer: PropTypes.string.isRequired,
		isDraw: PropTypes.func.isRequired,
		winner: PropTypes.string.isRequired,
	};

	return <InformationLayout />;
}
