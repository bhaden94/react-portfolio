import { render, screen } from "@testing-library/react";
import Projects from "./Projects";
import { ProjectObject, ProjectObj } from "../../infoObjects/ProjectsObj";

it("render Projects component with title and description", () => {
	const projects: ProjectObj[] = ProjectObject();

	render(<Projects />);
	projects.forEach((p: ProjectObj) => {
		expect(screen.getByText(p.title)).toBeInTheDocument();
		expect(screen.getByText(p.shortDesc)).toBeInTheDocument();
	});
});
