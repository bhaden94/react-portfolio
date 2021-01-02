import React from "react";
import "./App.css";
import Navigation from "./components/nav/Navigation";
import Skills from "./components/skills/Skills";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "./theme";
import useTheme from "@material-ui/core/styles/useTheme";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Header from "./components/section-headers/Header";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import About from "./components/about/About";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		top: {
			height: "100vh",
		},
		section: {
			width: "100%",
		},
		bottom: {
			minHeight: "100vh",
		},
	})
);

function App() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<div>
				<CssBaseline />
				<Navigation />
				<div className="App-header">
					<div
						id="top"
						className={[classes.top, classes.section].join(" ")}
					>
						top
					</div>

					<div id="About" className={classes.section}>
						<Header text="About" />
						<About />
					</div>

					<div id="Skills" className={classes.section}>
						<Header text="Skills" />
						<Skills />
					</div>

					<div id="Projects" className={classes.section}>
						<Header text="projects" />
						<Projects />
					</div>

					<div id="Experience" className={classes.section}>
						<Header text="Experience" />
						<Experience />
					</div>

					<div id="Education" className={classes.section}>
						<Header text="Education" />
						<Education />
					</div>

					<div
						id="Contact"
						className={[classes.bottom, classes.section].join(" ")}
					>
						<Header text="Contact" />
						<Contact />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
