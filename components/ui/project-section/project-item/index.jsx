import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({
  ...props
}) {
  return (
    <li className="flex w-full">
      {props.thumbnail && (
        <Image
          src={props.thumbnail}
          alt={props.title}
          width={240}
          height={240}
          className="aspect-video object-cover object-top w-full max-w-1/2 rounded-xl ring-2 ring-gray-50"
          priority={false}
        />

      )}
      <hgroup className="p-2 text-shadow-2xs text-shadow-gray-500/20">
        <Link href={`/projects/${props.slug}`}>
          <h2 className="text-xl font-medium">{props.title}</h2>
        </Link>

        <p className="text-sm md:text-base font-ibm-mono font-light w-24 opacity-75 shrink-0">{props.year}</p>
      </hgroup>

    </li>
  );
}