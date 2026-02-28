import ProjectSection from "@/components/ui/project-section";
import PageHeader from "@/components/layout/page-header";
import CollaborationSection from "@/components/ui/collaborators-section";
export default async function Home() {


  return (
    <div className="container p-4 mx-auto flex flex-col gap-10 font-ibm-sans">
      <PageHeader />
      <main className="cust-content-container text-black p-4">
        <CollaborationSection />
        <ProjectSection />

      </main>
      <footer>

      </footer>
    </div>

  );
}