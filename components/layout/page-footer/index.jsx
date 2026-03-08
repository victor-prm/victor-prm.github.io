import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function PageFooter() {
    return (
        <footer >
                <ul className="flex gap-4 flex-wrap text-sm w-fit ml-auto mr-4">
                    <li><Link href="https://www.linkedin.com/in/victor-permild/" className="cust-link inline-flex gap-2 items-center"><FaLinkedin /> LinkedIn</Link></li>
                    <li><Link href="https://github.com/victor-prm" className="cust-link inline-flex gap-2 items-center"><FaGithub /> GitHub</Link></li>
                    <li><Link href="https://www.instagram.com/victorpermild/" className="cust-link inline-flex gap-2 items-center"><FaInstagram /> Instagram</Link></li>
                </ul>
        </footer >
    )
}