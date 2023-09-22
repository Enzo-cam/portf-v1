import {FC} from 'react'
// import ProjectCard from "./ProjectCard"
import { IProject } from '@/Interfaces/Project'

interface Props{
    projects: IProject[]
}

const ProjectList: FC<Props> = ({projects}) => {
    return (
        <div className="space-y-4">
            {projects.map((project, index) => (
                // <ProjectCard key={index} project={project} />
            ))}
        </div>
      );
    }
    
    export default ProjectList;