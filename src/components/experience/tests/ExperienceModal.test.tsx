import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IExperienceObject } from "../../../information/ExperienceObject";
import ExperienceModal from "../ExperienceModal";

it("expands Accomplishments section in ExperienceModal", () => {
	const mockJob: IExperienceObject = {
		startDate: new Date(2021, 3, 0),
		endDate: "Present",
		title: "Test Title",
		company: "The best company",
		bullets: ["To be determined..."],
		media: "test media",
		techUsed: [],
	};
	const mockClose = jest.fn();

	render(<ExperienceModal job={mockJob} open handleClose={mockClose} />);
	const accomplishments = screen.getAllByTestId("expand-acc-btn")[0];
    
	userEvent.click(accomplishments);
	expect(screen.getByTestId("exp-expanded-acc")).toBeInTheDocument();
});
