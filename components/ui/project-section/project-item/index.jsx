import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({
  ...props
}) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Link href={`/projects/${props.slug}`}>
        {props.thumbnail && (
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
            <Image
              src={props.thumbnail}
              alt={props.title}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              style={{ objectFit: "cover", borderRadius: "8px" }}
              priority={false}
            />
          </div>
        )}

        <h2>{props.title}</h2>
      </Link>

      <p>{props.byline}</p>
      <p>{props.description}</p>
    </div>
  );
}