import { render, screen } from "@testing-library/react";
import { EducationObject, IEducationObject } from "../../infoObjects/EducationObject";
import Education from "./Education";
import { formatEducationDate } from "../../utils/formatDate";

beforeEach(() => {
	render(<Education />);
});

it("renders Education component with school names", () => {
	const education: IEducationObject[] = EducationObject();
	education.forEach((ed: IEducationObject) =>
		expect(screen.getAllByText(ed.school)[0]).toBeInTheDocument()
	);
});

it("renders Education component with degree names", () => {
	const education: IEducationObject[] = EducationObject();
	education.forEach((ed: IEducationObject) =>
		expect(screen.getByText(ed.degree)).toBeInTheDocument()
	);
});

it("formatDate shows expected string for future date", () => {
	const futureDate: Date = new Date();
	futureDate.setDate(futureDate.getDate() + 1);
	const formatted: string = formatEducationDate(futureDate);
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
	const formatted: string = formatEducationDate(futureDate);
	const shouldEqual: string = futureDate.toLocaleDateString("default", {
		month: "long",
		year: "numeric",
	});

	expect(formatted).toEqual(shouldEqual);
});
