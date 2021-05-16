import "./App.css";
import Navigation from "./components/nav/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "./theme";
import useTheme from "@material-ui/core/styles/useTheme";
import Contact from "./components/contact/Contact";
import Header from "./components/section-headers/Header";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ReturnToTop from "./components/contact/ReturnToTop";
import LandingPage from "./components/landing/LandingPage";
import { INavObject, NavObject } from "./information/NavObject";

const useStyles = makeStyles(() =>
	createStyles({
		top: {
			height: "100vh",
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

function App() {
	const classes = useStyles();
	const theme: Theme = useTheme();

	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	);
}

export default App;
