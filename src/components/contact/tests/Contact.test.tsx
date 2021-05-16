import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import { IContactObject, ContactObject } from "../../../information/ContactObject";

it("renders Contact component with link and icon button", () => {
	const contact: IContactObject[] = ContactObject("test-class");
	render(<Contact />);
	contact.forEach((c: IContactObject, i: number) => {
		expect(screen.getByText(c.text)).toBeInTheDocument();
		expect(screen.getByText(c.text).closest("a")).toHaveAttribute(
			"href",
			c.link
		);
		expect(screen.getByTestId(`icon-btn${i}`)).toHaveAttribute(
			"href",
			c.link
		);
	});
});
