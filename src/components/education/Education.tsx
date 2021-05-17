import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
	IEducationObject,
	EducationObject,
} from "../../information/EducationObject";
import { useGlobalStyles } from "../../theme/globalStyle";
import { formatEducationDate } from "../../utils/formatDate";

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		padding: "1.2rem 1.2rem 0",
	},
	title: {
		fontSize: "1.5rem",
		color: theme.palette.primary.main,
		"&:hover": {
			textDecoration: "none",
			cursor: "default",
		},
	},
	school: {
		fontSize: "1.5rem",
		position: "relative",
		"&:hover": {
			textDecoration: "none",
		},
		"&::before": {
			content: "''",
			position: "absolute",
			width: "100%",
			height: "3px",
			bottom: 0,
			left: 0,
			backgroundColor: theme.palette.secondary.main,
			visibility: "hidden",
			transform: "scaleX(0)",
			transition: "all 0.1s linear",
		},
		"&:hover::before": {
			visibility: "visible",
			transform: "scaleX(1)",
		},
	},
	degree: {
		padding: "1rem 0 0",
	},
	bullets: {
		margin: 0,
		padding: "0 1.2rem 1.2rem",
		"& *": {
			fontSize: "1rem",
			fontWeight: 300,
		},
		[theme.breakpoints.down("sm")]: {
			"& *": {
				fontSize: ".9rem",
			},
		},
	},
}));

function Education() {
	const education: IEducationObject[] = EducationObject();
	const classes = useStyles();
	const globalClasses = useGlobalStyles();

	return (
		<div>
			{education.map((ed: IEducationObject, i: number) => (
				<Paper
					key={i}
					className={[
						globalClasses.container,
						classes.container,
					].join(" ")}
					elevation={3}
				>
					<Typography variant="h4" variantMapping={{ h4: "h3" }}>
						{ed.schoolLink ? (
							<Link
								className={classes.school}
								href={ed.schoolLink}
								target="_blank"
								rel="noreferrer"
							>
								{ed.school}
							</Link>
						) : (
							<div className={classes.title}>{ed.school}</div>
						)}
					</Typography>
					<Typography color="textSecondary">
						{ed.dateFinished &&
							formatEducationDate(ed.dateFinished)}
					</Typography>
					<Typography
						className={classes.degree}
						color="textSecondary"
					>
						{ed.degree}
					</Typography>
					<ul className={classes.bullets}>
						{ed.bullets?.map((bullet: string, i: number) => (
							<li key={i}>
								<Typography color="textSecondary">
									{bullet}
								</Typography>
							</li>
						))}
					</ul>
				</Paper>
			))}
		</div>
	);
}

export default Education;
