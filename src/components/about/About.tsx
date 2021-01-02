import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AboutObj, AboutObject } from "../../infoObjects/AboutObj";
import Typography from "@material-ui/core/Typography";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			[theme.breakpoints.down("xl")]: {
				margin: "50px 15%",
			},
			[theme.breakpoints.down("lg")]: {
				margin: "50px 8%",
			},
			[theme.breakpoints.down("md")]: {
				margin: "50px 5%",
			},
			[theme.breakpoints.down("sm")]: {
				margin: "50px 24px",
			},
			[theme.breakpoints.down("xs")]: {
				margin: "50px 24px",
			},
		},
		headline: {
			fontSize: "2rem",
			[theme.breakpoints.down("sm")]: {
				fontSize: "1.5rem",
			},
		},
		headContainer: {
			paddingLeft: "2rem",
			[theme.breakpoints.down("sm")]: {
				paddingLeft: "1.5rem",
			},
			borderLeft: `5px solid ${theme.palette.secondary.main}`,
		},
	})
);

function About() {
	const classes = useStyles();
	const about: AboutObj = AboutObject();

	return (
		<div className={classes.container}>
			<ScrollAnimation
				duration={0.5}
				animateIn="fadeInUp"
				// initiallyVisible={true}
				animateOnce={true}
			>
				<div className={classes.headContainer}>
					<Typography className={classes.headline}>
						{about.headline}
					</Typography>
				</div>
			</ScrollAnimation>

			{about.strengths.map((strength: string) => (
				<ScrollAnimation
					duration={0.5}
					animateIn="fadeInUp"
					// initiallyVisible={true}
					animateOnce={true}
				>
					<div style={{ height: "200px" }}>
						<Typography>{strength}</Typography>
					</div>
				</ScrollAnimation>
			))}
		</div>
	);
}

export default About;
