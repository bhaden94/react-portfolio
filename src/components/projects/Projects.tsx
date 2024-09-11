import Grid from "@material-ui/core/Grid";
import { useGlobalStyles } from "../../theme/globalStyle";
import ProjectCard from "./ProjectCard";
import { ProjectSchema } from "../../sanity-client/schemaTypes/project";
import { useState, useEffect } from "react";
import { getProjectInfo } from "../../sanity-client/sanity.queries";

function Projects() {
  const globalClasses = useGlobalStyles();
  const [projectInfo, setProjectInfo] = useState<ProjectSchema[]>();

  useEffect(() => {
    const fetchData = async () => {
      const projectQuery = await getProjectInfo();
      setProjectInfo(projectQuery);
    };
    fetchData();
  }, []);

  return (
    <div className={globalClasses.container}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={6}
      >
        {projectInfo?.map((project: ProjectSchema, i: number) => (
          <Grid key={i} item xs={12} sm={6} lg={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
