// if the dateCompleted is in the future then we add the word 'Expected' to the beginning
export const formatEducationDate = (date: Date): string => {
	const currDate: Date = new Date();
	const dateString: string = date.toLocaleDateString("default", {
		month: "long",
		year: "numeric",
	});
	return date > currDate ? `Expected ${dateString}` : dateString;
};

/* 
	format the start and end dates of jobs
	also checks if the end date is a string, like 'present'
*/
export const formatExperienceDate = (start: Date, end: Date | string): string => {
	const startDate: string = start.toLocaleDateString("default", {
		month: "short",
		year: "numeric",
	});
	let endDate: string;
	if (end instanceof Date) {
		endDate = end.toLocaleDateString("default", {
			month: "short",
			year: "numeric",
		});
	} else {
		endDate = end;
	}
	return `${startDate} - ${endDate}`;
};
