import "./styles.css";
import projectsData from "../projects.json";
import ProjectList from "../components/ProjectList/ProjectList";
import ProjectData from "../project-data";

const projects: ProjectData[] = projectsData;

export default function Home() {
  return (
    <main>
      <ProjectList projects={projects}></ProjectList>
    </main>
  );
}
