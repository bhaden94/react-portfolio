import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("renders section Header component with proper text", () => {
	render(<Header text={"Hello"} />);
	expect(screen.getByText("Hello")).toBeInTheDocument();
});
