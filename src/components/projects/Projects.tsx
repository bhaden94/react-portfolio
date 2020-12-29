import React from "react";
import { ProjectObject, ProjectObj } from "../../infoObjects/ProjectsObj";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		[theme.breakpoints.down("xl")]: {
			padding: "50px 18%",
		},
		[theme.breakpoints.down("lg")]: {
			padding: "50px 10%",
		},
		[theme.breakpoints.down("md")]: {
			padding: "50px 5%",
		},
		[theme.breakpoints.down("sm")]: {
			padding: "50px 24px",
		},
		[theme.breakpoints.down("xs")]: {
			padding: "50px 24px",
		},
	},
}));

function Projects() {
	const classes = useStyles();
	const projects: ProjectObj[] = ProjectObject();

	return (
		<div className={classes.container}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={6}
			>
				{projects.map((project: ProjectObj, index: number) => {
					return (
						<Grid
							key={project.id}
							item
							xs={12}
							sm={6}
							lg={4}
							justify="center"
						>
							<ProjectCard project={project} key={project.id} />
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

export default Projects;
