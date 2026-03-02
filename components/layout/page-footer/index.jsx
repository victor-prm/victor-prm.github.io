import PageSection from "../page-section";
import Link from "next/link";

export default function PageFooter() {
    return (
        <footer >
            <PageSection title="Contact" className="bg-lime-900/75 text-white pb-6 w-fit min-w-60">
                <ul className="flex gap-4">
                    <li><Link href="#"></Link>LinkedIn</li>
                    <li><Link href="#"></Link>Instagram</li>
                </ul>
            </PageSection>
        </footer >
    )
}