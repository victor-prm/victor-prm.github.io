import fs from "fs";
import path from "path";
import PageSection from "@/components/layout/page-section";
import CVItem from "./cv-item";

export default async function CVSection() {
    const filePath = path.join(process.cwd(), "content", "cv.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const cv = JSON.parse(fileContents);

    const rows = Math.ceil(cv.length / 2);

    return (
        <PageSection title="Work Experience">
            <ol
                className="grid xl:grid-flow-col gap-y-8 gap-x-16"
                style={{ gridTemplateRows: `repeat(${rows}, auto)` }}
            >

                {cv.map((item) => (
                    <CVItem
                        key={item.employer}
                        employer={item.employer}
                        roles={item.roles}
                    />
                ))}
            </ol>
        </PageSection >
    );
}