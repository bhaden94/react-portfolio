import { render, screen } from "@testing-library/react";
import Skills from "../Skills";
import { SkillsObject, ISkillsObject } from "../../../information/SkillsObject";

it("renders Skills component with object titles", () => {
	const skills: ISkillsObject[] = SkillsObject();
	render(<Skills />);

	skills.forEach((skill: ISkillsObject) =>
		expect(screen.getByText(skill.title)).toBeInTheDocument()
	);
});

it("renders Skills component with object tech names", () => {
	const skills: ISkillsObject[] = SkillsObject();
	render(<Skills />);

	skills.forEach((skill: ISkillsObject) =>
		skill.tech.forEach((tech: any) =>
			expect(screen.getAllByText(tech.name)[0]).toBeInTheDocument()
		)
	);
});
