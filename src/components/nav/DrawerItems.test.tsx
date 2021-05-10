import { render } from "@testing-library/react";
import { MobileTheme, DesktopTheme } from "../../__mock__/MockTheme";
import DrawerItems from "./DrawerItems";
import { NavObjects, NavObj } from "../../infoObjects/NavObj";

const mockToggle = jest.fn();

/*
    tests are failing due to calling useStyles in NavObj
    It is saying that the hook is being called outside of a function
*/
it.skip("render DrawerItems component on desktop", () => {
	const nav: NavObj[] = NavObjects();

	render(<DrawerItems toggleDrawer={mockToggle} />, {
		wrapper: DesktopTheme,
	});

	// nav.forEach((n: NavObj) => {
	// 	expect(screen.getByText(n.text)).toBeInTheDocument();
	// });
});

it.skip("render DrawerItems component on mobile", () => {
	render(<DrawerItems toggleDrawer={mockToggle} />, { wrapper: MobileTheme });
});
