import fs from "fs";
import path from "path";
import Image from "next/image";

export default async function CollaborationSection() {
    const filePath = path.join(process.cwd(), "content/collaborators.json");
    const companies = JSON.parse(fs.readFileSync(filePath, "utf8"));

    console.log(companies)

    if (!companies) return;

    const CompanyItem = ({ ...props }) => {
        return (
            <li className="flex items-center">
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
        <section className='text-normal cust-content-container'>
            <h2 className="text-6xl font-ibm-serif font-bold mb-8">People I've worked with</h2>
            <ul className="grid grid-cols-4 gap-8 py-8">
                {companies.map(company => (
                    <CompanyItem key={company.name} name={company.name} logo={company.logo} />
                ))}
            </ul>

        </section>
    )
}