import ProjectSection from "@/components/ui/project-section";
import PageHeader from "@/components/layout/page-header";
import CollaborationSection from "@/components/ui/collaborators-section";
import CVSection from "@/components/ui/cv-section";
export default async function Home() {


  return (
    <div className="container p-4 mx-auto flex flex-col gap-20 font-ibm-sans">
      <PageHeader />
      <main className="flex flex-col gap-20">
        <CollaborationSection />
        {/*  <ProjectSection /> */}
        <CVSection />
      </main>
      <footer>

      </footer>
    </div>

  );
}