import { render, screen } from "@testing-library/react";
import { EducationObject, EducationObj } from "../../infoObjects/EducationObj";
import Education from "./Education";
import { formatDate } from "./formatDate";

beforeEach(() => {
	render(<Education />);
});

it("renders Education component with school names", () => {
	const education: EducationObj[] = EducationObject();
	education.forEach((ed: EducationObj) =>
		expect(screen.getAllByText(ed.school)[0]).toBeInTheDocument()
	);
});

it("renders Education component with degree names", () => {
	const education: EducationObj[] = EducationObject();
	education.forEach((ed: EducationObj) =>
		expect(screen.getByText(ed.degree)).toBeInTheDocument()
	);
});

it("formatDate shows expected string for future date", () => {
	const futureDate: Date = new Date();
	futureDate.setDate(futureDate.getDate() + 1);
	const formatted: string = formatDate(futureDate);
	const shouldEqual: string =
		"Expected " +
		futureDate.toLocaleDateString("default", {
			month: "long",
			year: "numeric",
		});

	expect(formatted).toEqual(shouldEqual);
});

it("formatDate shows expected string for past date", () => {
	const futureDate: Date = new Date();
	futureDate.setDate(futureDate.getDate() - 1);
	const formatted: string = formatDate(futureDate);
	const shouldEqual: string = futureDate.toLocaleDateString("default", {
		month: "long",
		year: "numeric",
	});

	expect(formatted).toEqual(shouldEqual);
});