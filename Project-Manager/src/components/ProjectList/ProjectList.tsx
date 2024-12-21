import classes from "./ProjectList.module.css";
import ProjectData from "../../project-data";
import ProjectItem from "../ProjectItem/ProjectItem";

interface ProjectListProps {
  projects: ProjectData[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className={classes.projectListContainer}>
      <h1 className={classes.projectListHeading}>Список реализованных проектов</h1>
      <ul className={classes.projectList}>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id}></ProjectItem>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
