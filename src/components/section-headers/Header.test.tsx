import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("renders Header component", () => {
	render(<Header text={"Hello"} />);
	expect(screen.getByText("Hello")).toBeTruthy();
});
