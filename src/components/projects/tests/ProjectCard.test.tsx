import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectCard from "../ProjectCard";
import { ProjectObject, IProjectObject } from "../../../information/ProjectsObject";

const projects: IProjectObject[] = ProjectObject();

it("render ProjectCard component with title and description on front of card", () => {
	projects.forEach((p: IProjectObject) => {
		render(<ProjectCard project={p} />);
		expect(screen.getByText(p.title)).toBeInTheDocument();
		expect(screen.getByText(p.shortDesc)).toBeInTheDocument();
	});
});

it("render ProjectCard component with accomplishments on back of card", () => {
	projects.forEach((p: IProjectObject, i: number) => {
		render(<ProjectCard project={p} />);
		p.accomplishments.forEach((a: string) => {
			expect(screen.getByText(a)).toBeInTheDocument();
		});
	});
});

it("flip ProjectCard works", () => {
	const mockProject: IProjectObject = {
		id: 0,
		media: "pic",
		title: "test title",
		shortDesc: "test description",
		accomplishments: ["acc1", "acc2", "acc3"],
		liveLink: "test",
		codeLink: "test",
		techUsed: [],
	};

	const { container } = render(<ProjectCard project={mockProject} />);
	// there will be two of these button per one card
	// one on front and one on back
	userEvent.click(screen.getAllByTestId("card-flip-btn")[0]);
	expect(container.style.transform).toBe("");
});

it("render ProjectCard without liveLink", () => {
	const mockProject: IProjectObject = {
		id: 0,
		media: "pic",
		title: "test title",
		shortDesc: "test description",
		accomplishments: ["acc1", "acc2", "acc3"],
		codeLink: "test",
		techUsed: [],
	};

	render(<ProjectCard project={mockProject} />);
	expect(
		screen.getByTestId("flipping-card-media").closest("a")
	).toHaveAttribute("href", mockProject.codeLink);
});

it("render ProjectCard without liveLink, codeLink, or techUsed", () => {
	const mockProject: IProjectObject = {
		id: 0,
		media: "pic",
		title: "test title",
		shortDesc: "test description",
		accomplishments: ["acc1", "acc2", "acc3"],
	};

	render(<ProjectCard project={mockProject} />);
	expect(
		screen.getByTestId("flipping-card-media").closest("a")
	).not.toHaveAttribute("href");
	expect(screen.queryByText("Technologies Used")).not.toBeInTheDocument();
});
