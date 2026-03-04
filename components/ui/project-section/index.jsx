import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProjectItem from "@/components/ui/project-section/project-item";
import PageSection from "@/components/layout/page-section";

export default async function ProjectSection({ ...props }) {
    const projectsDir = path.join(process.cwd(), "content/projects");

    let projects = [];
    if (fs.existsSync(projectsDir)) {
        const folders = fs.readdirSync(projectsDir);
        projects = folders.map((folderName) => {
            const mdPath = path.join(projectsDir, folderName, "project.md");
            if (!fs.existsSync(mdPath)) return null;
            const fileContents = fs.readFileSync(mdPath, "utf8");
            const { data } = matter(fileContents);
            return { slug: folderName, ...data };
        }).filter(Boolean);
    }

    projects = projects.sort((a, b) => b.year - a.year)

    return (
        <PageSection title="Selected Projects" transparent>
            <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {projects.length === 0 && <p>No projects found.</p>}
                {projects.map((p) => (
                    <ProjectItem key={p.slug} {...p} />
                ))}
            </ol>
        </PageSection>


    );
}