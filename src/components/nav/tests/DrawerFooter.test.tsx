import { render, screen } from "@testing-library/react";
import { MockDarkTheme, MockLightTheme } from "../../../__mock__/MockTheme";
import DrawerFooter from "../DrawerFooter";

it("renders DrawerFooter component with dark theme", () => {
	render(
		<MockDarkTheme>
			<DrawerFooter />
		</MockDarkTheme>
	);

	expect(screen.getByText("Isn't that better?")).toBeInTheDocument();
});

it("renders DrawerFooter component with light theme", () => {
	render(
		<MockLightTheme>
			<DrawerFooter />
		</MockLightTheme>
	);

	expect(screen.getByText("Give your eyes a break!")).toBeInTheDocument();
});
