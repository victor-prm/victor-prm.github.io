import fs from "fs";
import path from "path";
import CollaboratorItem from "./collaborator-item";
import PageSection from "@/components/layout/page-section";

export default async function CollaborationSection() {
    const filePath = path.join(process.cwd(), "content/collaborators.json");
    const companies = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (!companies) return;


    return (
        <PageSection title="Collaborations">
            <ul className="grid grid-cols-4 lg:grid-cols-8 gap-8 py-8">
                {companies.map(company => (
                    <CollaboratorItem key={company.name} name={company.name} logo={company.logo} />
                ))}
            </ul>
        </PageSection>
    )
}