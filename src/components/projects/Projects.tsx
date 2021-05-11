import { ProjectObject, ProjectObj } from "../../infoObjects/ProjectsObj";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import { useGlobalStyles } from "../../theme/globalStyle";

function Projects() {
	const globalClasses = useGlobalStyles();
	const projects: ProjectObj[] = ProjectObject();

	return (
		<div className={globalClasses.container}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={6}
			>
				{projects.map((project: ProjectObj, i: number) => (
					<Grid key={i} item xs={12} sm={6} lg={4}>
						<ProjectCard project={project} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default Projects;
