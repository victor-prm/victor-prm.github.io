import Link from "next/link"

export default function PageHeader() {

    return (
        <header className=" text-xl flex w-fit flex-col gap-3  text-black p-6 max-w-160">
            <h1 className="cust-font-display">
                <span className="block">Hi</span>
                I'm Victor
            </h1>
            <p>I'm a web developer, with a background in interaction design.</p>
            <p>I love making user interfaces — both digital and physical ones.</p>
            <p>I've mostly focused on web development in past many years.</p>
            <p>I thrive in frontend work, but possess great understanding of backend tasks as well.</p>
            <p>I currently work at <Link className="cust-link" href={"https://www.fluxscape.io"}>Fluxscape</Link> as a Frontend Developer.</p>
            <p>I'm also a co-founder and design technologist in the interaction design studio <Link className="cust-link" href={"https://www.circuit-circus.com/"}>Circuit Circus</Link>.</p>
        </header>
    )
} 