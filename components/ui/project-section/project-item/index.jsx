import Image from "next/image";
import Link from "next/link";
import { TbFileBroken } from "react-icons/tb";

export default function ProjectItem(props) {
  const hasThumbnail = Boolean(props.thumbnail);

  return (
    <li className="w-full max-w-sm">
      <Link
        href={`/projects/${props.slug}`}
        className="group flex flex-col gap-1 text-left w-full"
      >
        <figure
          className="
            relative rounded-xl overflow-hidden
            aspect-16/10 transition shrink-0
            after:absolute after:inset-0 after:bg-black/5 after:z-10
            after:transition
            group-hover:after:bg-black/0
            flex items-center justify-center
          "
        >
          {hasThumbnail ? (
            <Image
              src={props.thumbnail}
              alt={props.title}
              width={240}
              height={240}
              className="object-cover object-top size-full rounded-xl pointer-fine:grayscale-100 duration-300 group-hover:grayscale-0"
            />
          ) : (
            <TbFileBroken className="size-8 opacity-60" />
          )}
        </figure>

        <hgroup className="px-2 pb-4">
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