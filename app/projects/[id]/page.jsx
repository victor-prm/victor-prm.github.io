import fs from "fs";
import path from "path";
import matter from "gray-matter";
import sizeOf from "image-size";
import { MDXRemote } from "next-mdx-remote/rsc";
import ImageGallery from "@/components/ui/image-gallery";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import PageFooter from "@/components/layout/page-footer";

const getNum = (str) => parseInt(str.match(/\d+/)?.[0] ?? 0);

export async function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), "content/projects");

  const ids = fs
    .readdirSync(projectsDir)
    .filter((file) =>
      fs.statSync(path.join(projectsDir, file)).isDirectory()
    );

  return ids.map((id) => ({ id }));
}

export default async function ProjectPage({ params }) {
  const { id } = await params;

  const projectDir = path.join(process.cwd(), "content/projects", id);
  const mdPath = path.join(projectDir, "project.md");

  if (!fs.existsSync(mdPath)) return <p>Project not found</p>;

  const fileContents = fs.readFileSync(mdPath, "utf8");
  const { data, content } = matter(fileContents);

  const publicDir = path.join(process.cwd(), "public/projects", id);

  let images = [];

  if (fs.existsSync(publicDir)) {
    images = fs
      .readdirSync(publicDir)
      .filter((file) => /\.(webp|gif)$/i.test(file))
      .sort((a, b) => getNum(a) - getNum(b))
      .map((file) => {
        const fullPath = path.join(publicDir, file);

        const buffer = fs.readFileSync(fullPath);
        const { width, height } = sizeOf(buffer);

        return {
          src: `/projects/${id}/${file}`,
          width,
          height,
          alt: data.images?.[file] || data.title || ""
        };
      });
  }


  const Descriptor = ({ k, v }) => {
    return (
      <p className="inline-flex gap-2">
        <span className="font-medium min-w-24">{k}</span>
        <span>{v}</span>
      </p>
    )
  }

  return (
    <div className="container flex flex-col mx-auto p-4 md:p-12 gap-8 md:gap-12 font-ibm-sans">
      <header className="flex flex-col gap-1">
        <Link href="/" className="mb-8 py-4 pl-0 pr-8 w-fit">
          <FaChevronLeft />
        </Link>

        <h1 className="cust-font-display">
          {data.title}
        </h1>
        <h2>{data.short_description}</h2>
        <div className="flex flex-col gap-1">
          {data.type && <Descriptor k="Type" v={data.type} />}
          {data.companies && <Descriptor k="Involved" v={data.companies.join(", ")} />}
          {data.year && <Descriptor k="Year" v={data.year} />}
          {data.tags && <Descriptor k="Keywords" v={data.tags.join(", ")} />}
        </div>

        <MDXRemote source={content} />
      </header>
      <main>
        <ImageGallery images={images} />
      </main>
       <PageFooter />
    </div>
  );
}