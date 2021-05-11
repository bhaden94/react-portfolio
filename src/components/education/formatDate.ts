// if the dateCompleted is in the future then we add the word 'Expected' to the beginning
export const formatDate = (date: Date): string => {
	const currDate: Date = new Date();
	const dateString: string = date.toLocaleDateString("default", {
		month: "long",
		year: "numeric",
	});
	return date > currDate ? `Expected ${dateString}` : dateString;
};
