import React from "react";
import { SkillsObject, SkillsObj } from "../../infoObjects/SkillsObj";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) => ({
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
	tech: {
		display: "inline-block",
		padding: "0 10px",
		textAlign: "center",
	},
	title: {
		padding: "1.2rem 1.2rem 0",
		fontWeight: 300,
	},
	skillContainer: {
		overflowX: "auto",
		overflowY: "hidden",
		whiteSpace: "nowrap",
		padding: "10px 0",
	},
}));

function Skills() {
	const skills: SkillsObj[] = SkillsObject();
	const classes = useStyles();

	return (
		<div>
			{skills.map((skill: SkillsObj) => (
				<Paper className={classes.container} elevation={3}>
					<Typography
						className={classes.title}
						variant="h4"
						color="textSecondary"
					>
						{skill.title}
						<hr />
					</Typography>

					<div className={classes.skillContainer}>
						{skill.tech.map((tech: any) => (
							<div className={classes.tech}>
								<div className="icon-hover">{tech.icon}</div>
								<Typography color="textSecondary">
									{tech.name}
								</Typography>
							</div>
						))}
					</div>
				</Paper>
			))}
		</div>
	);
}

export default Skills;
