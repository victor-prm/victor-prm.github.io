import Link from "next/link";

export default function ListItem({ title, byline, description, slug }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h2>{title}</h2>
      <h4>{byline}</h4>
      <p>{description}</p>
      <Link href={`/projects/${slug}`}>Read More →</Link>
    </div>
  );
}