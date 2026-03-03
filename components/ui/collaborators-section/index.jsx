import fs from "fs";
import path from "path";
import Image from "next/image";
import PageSection from "@/components/layout/page-section";

export default async function CollaborationSection() {
    const filePath = path.join(process.cwd(), "content/collaborators.json");
    const companies = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (!companies) return;

    const CompanyItem = ({ ...props }) => {
        return (
            <li className="flex items-center justify-center">
                <Image
                    src={props.logo}
                    alt={`${props.name} logo`}
                    width={100}
                    height={100}
                    className="h-24"
                />
            </li>
        )
    }

    return (

        <PageSection title="Collaborations">
            <ul className="grid grid-cols-4 lg:grid-cols-8 gap-8 py-8">
                {companies.map(company => (
                    <CompanyItem key={company.name} name={company.name} logo={company.logo} />
                ))}
            </ul>
        </PageSection>
    )
}