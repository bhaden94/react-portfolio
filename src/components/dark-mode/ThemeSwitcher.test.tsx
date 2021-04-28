import { render, within } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";

it.only("renders ThemeSwitcher component with light theme", () => {
	const {debug} = render(<ThemeSwitcher />);

	debug()
    const { getByTestId } = render(<ThemeSwitcher />);
   expect(getByTestId).toBe(3);
});

// it("renders ThemeSwitcher component with dark theme", () => {
// 	themeMode = "dark";
// 	const wrapper = render(<ThemeSwitcher />);

// 	expect(wrapper.find("Brightness4Icon")).toBeTruthy();
// });
