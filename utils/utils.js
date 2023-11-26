export const validateNumber = (number) => {
	const selectedNumber = Number.parseInt(number);
	if (isNaN(selectedNumber) || selectedNumber < 0 || selectedNumber > 99) {
		return false;
	}
	return true;
};

export const generateRandomBetween = (min, max, exclude) => {
	const rndnumber = Math.floor(Math.random() * (max - min)) + min;
	if (rndnumber === exclude) {
		return (generateRandomBetween = (min, max, exclude));
	} else {
		return rndnumber;
	}
};
