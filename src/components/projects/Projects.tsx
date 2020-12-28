import React from "react";
import { ProjectObject, ProjectObj } from "../../infoObjects/ProjectsObj";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";

function Projects() {
	const projects: ProjectObj[] = ProjectObject();

	return (
		<div style={{ padding: 30 }}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="stretch"
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
							xl={3}
							justify="center"
						>
							<ProjectCard project={project} key={project.id} />

							{/* <p>{project.media}</p>
							<p>{project.title}</p>
							<p>{project.shortDesc}</p>
							<p>{project.longDesc}</p>
							<p>{project.liveLink}</p>
							<p>{project.codeLink}</p> */}
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

export default Projects;
