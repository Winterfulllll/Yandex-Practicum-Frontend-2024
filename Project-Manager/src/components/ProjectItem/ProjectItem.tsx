import classes from "./ProjectItem.module.css";
import ProjectData from "../../project-data";

interface ProjectItemProps {
  project: ProjectData;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <li key={project.id} className={classes.projectItem}>
      <a
        href={import.meta.env.BASE_URL + project.path}
        className={classes.projectLink}
      >
        <h2 className={classes.projectName}>{project.name}</h2>
        <p className={classes.projectSprints}>
          <b>{project.sprints.includes("-") ? "Спринты:" : "Спринт:"}</b>{" "}
          {project.sprints}
        </p>
        <p className={classes.projectDescription}>
          <b>Описание:</b> {project.description}
        </p>
      </a>
    </li>
  );
};

export default ProjectItem;
