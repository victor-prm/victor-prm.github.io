import PageBackground from "@/components/layout/page-background";
import PageHeader from "@/components/layout/page-header";
import CollaborationSection from "@/components/ui/collaborators-section";
import CVSection from "@/components/ui/cv-section";
export default async function Home() {


  return (
    <>
      <PageBackground />
      <div className="container flex flex-col mx-auto p-4 sm:p-8 md-p-16 gap-8 md:gap-12 font-ibm-sans">

        <PageHeader />
        <main className="flex flex-col gap-8 md:gap-12">
          <CollaborationSection />
          {/*  <ProjectSection /> */}
          <CVSection />
           <CollaborationSection />
        </main>
        <footer>

        </footer>
      </div>
    </>


  );
}