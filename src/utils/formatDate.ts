// if the dateCompleted is in the future then we add the word 'Expected' to the beginning
export const formatEducationDate = (date: string): string => {
  const givenDate: Date = new Date(date);
  const currDate: Date = new Date();
  const dateString: string = givenDate.toLocaleDateString("default", {
    month: "long",
    year: "numeric",
  });
  return givenDate > currDate ? `Expected ${dateString}` : dateString;
};

/* 
	format the start and end dates of jobs
	also checks if the end date is a string, like 'present'
*/
export const formatExperienceDate = (
  start: string,
  end: string | null,
): string => {
  const startDate: string = new Date(start).toLocaleDateString("default", {
    month: "short",
    year: "numeric",
  });
  let endDate: string;
  if (end) {
    endDate = new Date(end).toLocaleDateString("default", {
      month: "short",
      year: "numeric",
    });
  } else {
    endDate = "Present";
  }
  return `${startDate} - ${endDate}`;
};
