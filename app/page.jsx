import PageHeader from "@/components/layout/page-header";
import CollaborationSection from "@/components/ui/collaborators-section";
import ProjectSection from "@/components/ui/project-section";
import CVSection from "@/components/ui/cv-section";
import PageFooter from "@/components/layout/page-footer";


export default async function Home() {
  return (
    <>
      <div className="container flex flex-col mx-auto p-4 pb-8 md:p-12 gap-8 md:gap-12 font-ibm-sans">
        <PageHeader />
        <main className="flex flex-col gap-8 md:gap-12">
          <CollaborationSection />
          <ProjectSection />
          <CVSection />
        </main>
        <PageFooter />
      </div>
    </>
  );
}