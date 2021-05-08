import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockLightTheme } from "../../__mock__/MockTheme";
import Navigation from "./Navigation";

it("render Nagigation component on desktop", () => {
	Object.defineProperty(window, "innerWidth", {
		writable: true,
		configurable: true,
		value: 962, // 2 above material ui md breakpoint
	});
	const { debug } = render(<Navigation />);
	debug();
});

it.only("render Nagigation component on mobile", () => {
	// Object.defineProperty(window, "innerWidth", {
	// 	writable: true,
	// 	configurable: true,
	// 	value: 500, // 2 below material ui md breakpoint
	// });
    // Change the viewport to 500px.
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
	const { debug } = render(<MockLightTheme><Navigation /></MockLightTheme>);
	//debug();
});
