import { Icon } from "@icons-pack/react-simple-icons";
import { ProjectObject, ProjectObj } from '../../infoObjects/ProjectsObj'

function Projects() {

    const projects: ProjectObj[] = ProjectObject()

    return (
        <div>
            {
                projects.map((project: ProjectObj, index: number) => {
                    return (
                        <div>
                            <p>{project.media}</p>
                            <p>{project.title}</p>
                            <p>{project.shortDesc}</p>
                            <p>{project.longDesc}</p>
                            <p>{project.liveLink}</p>
                            <p>{project.codeLink}</p>
                            {project.techUsed.map((tech: Icon) => {
                                return (
                                    <div className='icon-hover'>
                                        {tech}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Projects;
