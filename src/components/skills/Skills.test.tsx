import { render, screen } from "@testing-library/react";
import Skills from "./Skills";
import { SkillsObject, SkillsObj } from "../../infoObjects/SkillsObj";


it("renders Skills component with objects", () => {
    const skills: SkillsObj[] = SkillsObject();
	render(<Skills />);
	expect(screen.getByText(skills[0].title)).toBeInTheDocument();
});