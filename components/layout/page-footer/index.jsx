import PageSection from "../page-section";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export default function PageFooter() {
    return (
        <footer >
            <PageSection title="Contact" className="bg-lime-950/80 text-white pb-6 w-fit min-w-60">
                <ul className="flex gap-8">
                    <li><Link href="#" className="inline-flex gap-2 items-center"><FaLinkedin /> LinkedIn</Link></li>
                    <li><Link href="#" className="inline-flex gap-2 items-center"><FaInstagram /> Instagram</Link></li>
                </ul>
            </PageSection>
        </footer >
    )
}