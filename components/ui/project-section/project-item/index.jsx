import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({
  ...props
}) {
  return (
    <li className="w-full">
      <Link
        href={`/projects/${props.slug}`}
        className="group flex w-full relative"
      >
        {props.thumbnail && (
          <figure
            className="
          relative max-w-1/2 rounded-xl overflow-hidden
          ring-2 ring-gray-50
          grayscale-100 transition
          group-hover:grayscale-0
          after:absolute after:inset-0 after:bg-black/50 after:z-10
          after:transition
          group-hover:after:bg-black/0
        "
          >
            <Image
              src={props.thumbnail}
              alt={props.title}
              width={240}
              height={240}
              className="aspect-video object-cover object-top"
            />
          </figure>
        )}

        <hgroup className="p-2">
          <h2 className="text-xl font-medium">
            {props.title}
          </h2>
          <p className="text-sm md:text-base font-ibm-mono font-light opacity-75">
            {props.year}
          </p>
        </hgroup>
      </Link>
    </li>
  );
}