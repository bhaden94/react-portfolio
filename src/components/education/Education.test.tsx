import { render, screen } from "@testing-library/react";
import { EducationObject, EducationObj } from "../../infoObjects/EducationObj";
import Education from "./Education";

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

// add tests for if bullets, school link, and date finished are there
