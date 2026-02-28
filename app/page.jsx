import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ListItem from "@/_components/list-item";

export default async function Home() {
  const projectsDir = path.join(process.cwd(), "_content/projects");

  let projects = [];
  if (fs.existsSync(projectsDir)) {
    const folders = fs.readdirSync(projectsDir);
    projects = folders.map((folderName) => {
      const mdPath = path.join(projectsDir, folderName, "project.md"); // <--- use project.md
      if (!fs.existsSync(mdPath)) return null;
      const fileContents = fs.readFileSync(mdPath, "utf8");
      const { data } = matter(fileContents);
      return { slug: folderName, ...data };
    }).filter(Boolean);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>Projects</h1>
      {projects.length === 0 && <p>No projects found.</p>}
      {projects.map((p) => (
        <ListItem key={p.slug} {...p} />
      ))}
    </div>
  );
}