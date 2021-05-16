import { render, screen } from "@testing-library/react";
import { MobileTheme, DesktopTheme } from "../../../__mock__/MockTheme";
import DrawerItems from "../DrawerItems";

const mockToggle = jest.fn();

/*
    tests are failing due to calling useStyles in NavObj
    It is saying that the hook is being called outside of a function
*/
it("render DrawerItems component on desktop", () => {
	render(<DrawerItems toggleDrawer={mockToggle} isDesktop />, {
		wrapper: DesktopTheme,
	});

	expect(screen.getAllByTestId("nav-link-true").length).toBeGreaterThan(1)
});

it("render DrawerItems component on mobile", () => {
	render(<DrawerItems toggleDrawer={mockToggle} isDesktop={false} />, {
		wrapper: MobileTheme,
	});

	expect(screen.getAllByTestId("nav-link-false").length).toBeGreaterThan(1)
});
