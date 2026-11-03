const getInitialState = () => ({
	currentPlayer: "X",
	isGameEnded: false,
	isDraw: false,
	winner: null,
	field: ["", "", "", "", "", "", "", "", ""],
	winLine: [],
});

const initialState = getInitialState();

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_CURRENT_PLAYER":
			return {
				...state,
				currentPlayer: payload,
			};

		case "SET_IS_GAME_ENDED":
			return {
				...state,
				isGameEnded: payload,
			};

		case "SET_IS_DRAW":
			return {
				...state,
				isDraw: payload,
			};

		case "SET_WINNER":
			return {
				...state,
				winner: payload,
			};

		case "SET_FIELD":
			return {
				...state,
				field: payload,
			};

		case "SET_WIN_LINE":
			return {
				...state,
				winLine: payload,
			};

		case "RESTART_GAME":
			return getInitialState();

		default:
			return state;
	}
};
