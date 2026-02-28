import ProjectGallery from "@/components/project-gallery";

export default async function Home() {


  return (
    <div className="container p-4 mx-auto flex flex-col gap-10 font-ibm-sans">
      <header className="bg-white/75 backdrop-blur-xs ring ring-gray-300/50 text-black p-4 text-2xl flex flex-col gap-2">
        <h1 className="font-ibm-serif font-medium text-9xl mb-8">Hello <span className="block font-ibm-sans text-7xl font-normal">I'm Victor</span></h1>
        <p>I'm a web developer based in Copenhagen.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia harum accusantium optio.</p>
        <p>I'm also a co-founder and design technologist in Circuit Circus, an interaction design studio based in copenhagen</p>
      </header>
      <main className="bg-white/75 backdrop-blur-xs ring ring-gray-300/50 text-black p-4">
        <ProjectGallery />
      </main>
      <footer>

      </footer>
    </div>

  );
}