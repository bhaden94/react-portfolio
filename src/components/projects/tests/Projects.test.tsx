import { render, screen } from "@testing-library/react";
import Projects from "../Projects";
import { ProjectObject, IProjectObject } from "../../../information/ProjectsObject";

it("render Projects component with front and back of card", () => {
	const projects: IProjectObject[] = ProjectObject();

	render(<Projects />);
	projects.forEach((_, i: number) => {
		expect(
			screen.getAllByTestId("flipping-card-front")[i]
		).toBeInTheDocument();
		expect(
			screen.getAllByTestId("flipping-card-back")[i]
		).toBeInTheDocument();
	});
});
