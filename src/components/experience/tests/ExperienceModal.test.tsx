import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExperienceModal from "../ExperienceModal";
import { ExperienceSchema } from "../../../sanity-client/schemaTypes/experience";

it("expands Accomplishments section in ExperienceModal", () => {
  const mockJob: ExperienceSchema = {
    startDate: new Date(2021, 3, 0).toDateString(),
    endDate: null,
    title: "Test Title",
    company: "The best company",
    bullets: ["To be determined..."],
    media: {
      _key: "testKey",
      _type: "image",
      asset: { _ref: "testRef", _type: "reference" },
    },
    techUsed: [],
  };
  const mockClose = jest.fn();

  render(<ExperienceModal job={mockJob} open handleClose={mockClose} />);
  const accomplishments = screen.getAllByTestId("expand-acc-btn")[0];

  userEvent.click(accomplishments);
  expect(screen.getByTestId("exp-expanded-acc")).toBeInTheDocument();
});
