import Grid from "@material-ui/core/Grid";
import { IProjectObject, ProjectObject } from "../../information/ProjectsObject";
import { useGlobalStyles } from "../../theme/globalStyle";
import ProjectCard from "./ProjectCard";

function Projects() {
	const globalClasses = useGlobalStyles();
	const projects: IProjectObject[] = ProjectObject();

	return (
		<div className={globalClasses.container}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={6}
			>
				{projects.map((project: IProjectObject, i: number) => (
					<Grid key={i} item xs={12} sm={6} lg={4}>
						<ProjectCard project={project} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default Projects;
