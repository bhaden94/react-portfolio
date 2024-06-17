import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import "./App.css";
import Contact from "./components/contact/Contact";
import ReturnToTop from "./components/contact/ReturnToTop";
import LandingPage from "./components/landing/LandingPage";
import Navigation from "./components/nav/Navigation";
import Header from "./components/section-headers/Header";
import { AboutObject } from "./information/AboutObject";
import { INavObject, NavObject } from "./information/NavObject";
import ThemeProvider from "./theme";
import {
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
} from "@tanstack/react-router";
import { Studio } from "sanity";
import { config } from "./studio/sanity.config";

const rootRoute = createRootRoute();
const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: HomeComponent,
});
const baseStudioRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "studio",
	component: StudioComponent,
});
const studioRoute = createRoute({
	getParentRoute: () => baseStudioRoute,
	path: "$",
});
const routeTree = rootRoute.addChildren([
	homeRoute,
	baseStudioRoute,
	studioRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function StudioComponent() {
	return (
		<div
			style={{
				position: "absolute",
				width: "100vw",
				height: "100%",
				top: 0,
				left: 0,
				zIndex: 100,
			}}
		>
			<Studio config={config} />
		</div>
	);
}

function HomeComponent() {
	const useStyles = makeStyles(() =>
		createStyles({
			top: {
				height: "100vh",
				backgroundImage: `url(${AboutObject().staticBackground})`,
				backgroundAttachment: "fixed",
				backgroundSize: "cover",
			},
			section: {
				width: "100%",
			},
			bottom: {
				minHeight: "100vh",
				position: "relative",
			},
		})
	);
	const classes = useStyles();

	return (
		<div data-testid="root-app-div">
			<CssBaseline />
			<Navigation />
			<div className="App-header">
				<div
					id="top"
					className={[classes.top, classes.section].join(" ")}
				>
					<LandingPage />
				</div>

				{NavObject().map((listItem: INavObject, i: number) => (
					<div id={listItem.text} key={i} className={classes.section}>
						<Header text={listItem.text} />
						{listItem.section}
					</div>
				))}

				<div
					id="Contact"
					className={[classes.bottom, classes.section].join(" ")}
				>
					<Header text="Contact" />
					<Contact />
					<ReturnToTop />
				</div>
			</div>
		</div>
	);
}

function App() {
	const theme: Theme = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
