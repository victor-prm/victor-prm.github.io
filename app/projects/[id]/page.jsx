import fs from "fs";
import path from "path";
import matter from "gray-matter";
import sizeOf from "image-size";
import { MDXRemote } from "next-mdx-remote/rsc";
import ImageGallery from "@/components/ui/image-gallery";

const getNum = (str) => parseInt(str.match(/\d+/)?.[0] ?? 0);

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
      .filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file))
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

  return (
    <div className="container flex flex-col mx-auto p-4 md:p-12 gap-8 md:gap-12 font-ibm-sans mb-20">
      <h1 className="cust-font-display">{data.title}</h1>
      <h3>{data.byline}</h3>
      <p>{data.year}</p>

      <MDXRemote source={content} />

      <ImageGallery images={images} />
    </div>
  );
}