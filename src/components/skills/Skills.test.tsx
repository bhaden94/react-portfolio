import { render, screen } from "@testing-library/react";
import Skills from "./Skills";
import { SkillsObject, SkillsObj } from "../../infoObjects/SkillsObj";

it("renders Skills component with object titles", () => {
	const skills: SkillsObj[] = SkillsObject();
	render(<Skills />);

	skills.forEach((skill: SkillsObj) =>
		expect(screen.getByText(skill.title)).toBeInTheDocument()
	);
});

it("renders Skills component with object tech names", () => {
	const skills: SkillsObj[] = SkillsObject();
	render(<Skills />);

	skills.forEach((skill: SkillsObj) =>
		skill.tech.forEach((tech: any) =>
			expect(screen.getAllByText(tech.name)[0]).toBeInTheDocument()
		)
	);
});
