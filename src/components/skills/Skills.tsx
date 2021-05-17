import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ISkillsObject, SkillsObject } from "../../information/SkillsObject";
import { useGlobalStyles } from "../../theme/globalStyle";

const useStyles = makeStyles((theme: Theme) => ({
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
	const skills: ISkillsObject[] = SkillsObject();
	const classes = useStyles();
	const globalClasses = useGlobalStyles();

	return (
		<div>
			{skills.map((skill: ISkillsObject, i: number) => (
				<Paper
					key={i}
					className={globalClasses.container}
					elevation={3}
				>
					<Typography
						className={classes.title}
						variant="h4"
						variantMapping={{ h4: "h3" }}
						color="textSecondary"
					>
						{skill.title}
						<hr />
					</Typography>

					<div className={classes.skillContainer}>
						{skill.tech.map((tech: any, i: number) => (
							<div key={i} className={classes.tech}>
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
