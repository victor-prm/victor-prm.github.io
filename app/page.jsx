import PageHeader from "@/components/layout/page-header";
import CollaborationSection from "@/components/ui/collaborators-section";
import ProjectSection from "@/components/ui/project-section";
import CVSection from "@/components/ui/cv-section";
import PageFooter from "@/components/layout/page-footer";
import ProjectModal from "@/components/ui/project-modal";

import fs from "fs";
import path from "path";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const activeProject = params?.project;

  let images = [];

  if (activeProject) {
    const publicDir = path.join(
      process.cwd(),
      "public",
      "projects",
      activeProject
    );

    if (fs.existsSync(publicDir)) {
      images = fs
        .readdirSync(publicDir)
        .filter((file) =>
          /\.(png|jpe?g|webp|gif)$/i.test(file)
        )
        .sort((a, b) => {
          const numA = parseInt(a.match(/\d+/));
          const numB = parseInt(b.match(/\d+/));
          return numA - numB;
        })
        .map((file) => `/projects/${activeProject}/${file}`);
    }
  }

  return (
    <>
      <div className="container flex flex-col mx-auto p-4 md:p-12 gap-8 md:gap-12 font-ibm-sans">
        <PageHeader />
        <main className="flex flex-col gap-8 md:gap-12">
          <CollaborationSection />
          <ProjectSection />
          <CVSection />
        </main>
        <PageFooter />
      </div>

      {activeProject && (
        <ProjectModal slug={activeProject} images={images} />
      )}
    </>
  );
}