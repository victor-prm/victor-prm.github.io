import fs from "fs";
import path from "path";
import Image from "next/image";
import CVItem from "./cv-item";

export default async function CVSection() {
    const filePath = path.join(process.cwd(), "content/cv.json");
    const jobs = JSON.parse(fs.readFileSync(filePath, "utf8"));

    console.log(jobs)

    if (!jobs) return;

    return (
        <section className='cust-content-container text-normal'>
            <h2 className="text-6xl font-ibm-serif font-bold mb-8">Places I've worked</h2>
            <ol className="flex flex-col gap-8">
                {jobs.map((company, _i) => (
                    <CVItem key={_i} role={company.role} employer={company.employer} start={company.start} end={company.end} />
                ))}
            </ol>

        </section>
    )
}