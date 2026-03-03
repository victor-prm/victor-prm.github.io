import PageSection from "@/components/layout/page-section";
import CVItem from "./cv-item";

export default async function CVSection() {

    return (
        <PageSection title="Work Experience">
            <ol className="grid gap-y-8 gap-x-16 xl:grid-cols-2">
                <CVItem
                    employer={"Fluxscape"}
                    roles={[
                        {
                            title: "Frontend Developer",
                            period: "2025-now"
                        }
                    ]}
                />
                <CVItem
                    employer={"Freelance"}
                    roles={[
                        {
                            title: "Frontend Developer",
                            period: "2025-now"
                        }
                    ]}
                />
                <CVItem
                    employer={"Noodl"}
                    roles={[
                        {
                            title: "Frontend Developer & Design Technologist",
                            period: "2022-2024"
                        }
                    ]}
                />
                <CVItem
                    employer={"ITU Copenhagen Design Labs"}
                    roles={[
                        {
                            title: "Design Consultant, IXD Lab",
                            period: "2021-2022"
                        },
                        {
                            title: "Design Consultant, AIR Lab",
                            period: "2019-2022"
                        },
                        {
                            title: "Lab Manager, AIR Lab",
                            note: "Parental leave cover",
                            period: "2021"
                        }
                    ]}
                />
                <CVItem
                    employer={"ITU Copenhagen"}
                    roles={[
                        {
                            title: "Assistant Lecturer",
                            note: "Design and programming courses",
                            period: "2016-2022"
                        },
                        {
                            title: "Main Lecturer (Summer school)",
                            period: "2021"
                        },
                        {
                            title: "Teaching Assistant",
                            period: "2014-2016"
                        }
                    ]}
                />
                <CVItem
                    employer={"BUF X"}
                    roles={[
                        {
                            title: "Lab assistant & Instructor",
                            period: "2017-2019"
                        }
                    ]}
                />
                <CVItem
                    employer={"Vital Beats (formerly SCAUT)"}
                    roles={[
                        {
                            title: "Interaction Designer & Videographer",
                            period: "2017-2019"
                        }
                    ]}
                />
                <CVItem
                    employer={"Circuit Circus"}
                    roles={[
                        {
                            title: "Programmer & Interaction Designer",
                            note: "Also co-founder",
                            period: "2015-now"
                        }
                    ]}
                />
            </ol>

        </PageSection>
    )
}


[
    {
        "employer": "Fluxscape",
        "role": "Frontend Developer",
        "start": "2025",
        "end": "now"
    },
    {
        "employer": "Freelance",
        "role": "Webdesigner",
        "start": "2024",
        "end": null
    },
    {
        "employer": "Noodl",
        "role": "Frontend Developer & Design Technologist",
        "start": "2022",
        "end": "2024"
    },
    {
        "employer": "ITU Copenhagen",
        "role": "Design Labs",
        "start": "2019",
        "end": "2022"
    },
    {
        "employer": "ITU Copenhagen",
        "role": "Assistant Lecturer",
        "start": "2016",
        "end": "2022"
    }
]