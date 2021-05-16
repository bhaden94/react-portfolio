import { render, screen } from "@testing-library/react";
import { EducationObject, IEducationObject } from "../../../information/EducationObject";
import Education from "../Education";

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
