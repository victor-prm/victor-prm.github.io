import PageSection from "../page-section";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";



export default function PageFooter() {
    return (
        <footer >
            <PageSection className="bg-black/75 text-white pb-6 min-w-60 w-fit ml-auto">
                <ul className="flex gap-6 flex-wrap text-sm">
                    <li><Link href="#" className="inline-flex gap-2 items-center"><FaLinkedin /> LinkedIn</Link></li>
                    <li><Link href="#" className="inline-flex gap-2 items-center"><FaGithub /> GitHub</Link></li>
                    <li><Link href="#" className="inline-flex gap-2 items-center"><FaInstagram /> Instagram</Link></li>
                </ul>
            </PageSection>
        </footer >
    )
}