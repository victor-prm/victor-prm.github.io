"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ProjectModal({ slug, images = [] }) {
    const router = useRouter();
    const params = useSearchParams();
    const [index, setIndex] = useState(0);
    const modalRef = useRef(null);

    function close() {
        const newParams = new URLSearchParams(params);
        newParams.delete("project");
        router.push(`?${newParams.toString()}`, { scroll: false });
    }

    // ESC key support
    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft" && index > 0) setIndex((i) => i - 1);
            if (e.key === "ArrowRight" && index < images.length - 1)
                setIndex((i) => i + 1);
        }

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [index, images.length]);

    if (!images.length) return null;

    const isFirst = index === 0;
    const isLast = index === images.length - 1;

    return (
        <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            onClick={close} // click outside
        >
            <div
                ref={modalRef}
                onClick={(e) => e.stopPropagation()} // prevent bubbling
                className="bg-black/50 backdrop-blur-2xl rounded-xl size-full overflow-hidden max-h-[75vw] max-w-[75vw] aspect-square grid *:col-start-1 *:row-start-1"
            >
                {/* Close Button */}
                <button
                    onClick={close}
                    className="text-sm"
                >
                    ✕
                </button>
                <Image
                    src={images[index]}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-contain"
                />


                <nav className="grid grid-cols-3 items-center mt-auto text-white z-10 w-50 place-self-center">

                    <div className="flex justify-start cursor-pointer">
                        <button
                            onClick={() => setIndex((i) => i - 1)}
                            className={isFirst ? "invisible" : ""}
                            disabled={isFirst}
                        >
                            ←
                        </button>
                    </div>


                    <div className="text-center text-sm opacity-60">
                        {index + 1} / {images.length}
                    </div>


                    <div className="flex justify-end cursor-pointer">
                        <button
                            onClick={() => setIndex((i) => i + 1)}
                            className={isLast ? "invisible" : ""}
                            disabled={isLast}
                        >
                            →
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}

