import { useEffect, useState } from "react";

export const connect = (store) => {
	const useStore = () => {
		const [, setUpdate] = useState(false);

		useEffect(() => {
			const unsubscribe = store.subscribe(() =>
				setUpdate((prev) => prev + 1),
			);
			return unsubscribe;
		}, []);
		return store.getState();
	};
	return useStore;
};
