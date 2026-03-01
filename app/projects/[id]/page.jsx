import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import ImageGallery from "@/components/ui/project-section/image-gallery";

export default async function ProjectPage({ params }) {
  const { id } = await params;

  const projectDir = path.join(process.cwd(), "content/projects", id);
  const mdPath = path.join(projectDir, "project.md");

  if (!fs.existsSync(mdPath)) return <p>Project not found</p>;

  const fileContents = fs.readFileSync(mdPath, "utf8");
  const { data, content } = matter(fileContents);

  // Read images from public folder
  const publicDir = path.join(process.cwd(), "public/projects", id);

let images = [];
if (fs.existsSync(publicDir)) {
  images = fs
    .readdirSync(publicDir)
    .filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/));
      const numB = parseInt(b.match(/\d+/));
      return numA - numB;
    })
    .map((file) => `/projects/${id}/${file}`);
}

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem" }}>
      <h1>{data.title}</h1>
      <h3>{data.byline}</h3>
      <p>{data.year}</p>

      <MDXRemote source={content} />

      <ImageGallery images={images} />
    </div>
  );
}