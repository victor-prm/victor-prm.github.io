"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProjectItem(props) {
  const router = useRouter();
  const params = useSearchParams();

  function openModal() {
    const newParams = new URLSearchParams(params);
    newParams.set("project", props.slug);
    router.push(`?${newParams.toString()}`, { scroll: false });
  }

  return (
    <li className="w-full max-w-sm">
      <button
        onClick={openModal}
        className="group flex gap-1 text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus:rounded-2xl  "     
      >
        {props.thumbnail && (
          <figure
            className="
              relative max-w-1/2 rounded-xl overflow-hidden
              ring-2 ring-gray-50 aspect-video h-25
              grayscale-100 transition shrink-0
              group-hover:grayscale-0
              after:absolute after:inset-0 after:bg-black/5 after:z-10
              after:transition
              group-hover:after:bg-black/0
            "
          >
            <Image
              src={props.thumbnail}
              alt={props.title}
              width={240}
              height={240}
              className="object-cover object-top size-full"
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
      </button>
    </li>
  );
}