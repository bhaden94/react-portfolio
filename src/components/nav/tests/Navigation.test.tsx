import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileTheme, DesktopTheme } from "../../../__mock__/MockTheme";
import Navigation from "../Navigation";

it("render Nagigation component on desktop", async () => {
	render(<Navigation />, { wrapper: DesktopTheme });

	await waitFor(() =>
		expect(screen.getByTestId("desktop-drawer")).toBeInTheDocument()
	);
});

it("render Nagigation component on mobile", async () => {
	render(<Navigation />, { wrapper: MobileTheme });

	await waitFor(() =>
		expect(screen.getByTestId("mobile-drawer")).toBeInTheDocument()
	);
});

it("open Navigation drawer on mobile", async () => {
	render(<Navigation />, { wrapper: MobileTheme });
	await waitFor(() => screen.getByTestId("mobile-drawer"));

	const menuBtn = screen.getByTestId("mobile-drawer-opener");
	userEvent.click(menuBtn);
	expect(document.body).toHaveStyle("padding-right: 0px; overflow: hidden;");
});
