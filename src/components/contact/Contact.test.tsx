import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
import { ContactObj, ContactObject } from "../../infoObjects/ContactObj";

it("renders Contact component with link", () => {
	const contact: ContactObj[] = ContactObject({});
	render(<Contact />);

	contact.forEach((c: ContactObj) => {
		expect(screen.getByText(c.text)).toBeInTheDocument();
		expect(screen.getByText(c.text).closest("a")).toHaveAttribute(
			"href",
			c.link
		);
	});
});
