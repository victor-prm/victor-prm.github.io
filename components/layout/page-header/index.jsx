import Link from "next/link"

export default function PageHeader() {

    return (
        <header className=" text-2xl flex w-fit flex-col gap-3 md:gap-2  text-black p-6 max-w-180">
            <h1 className="font-bliss-mood text-6xl sm:text-8xl md:text-9xl leading-none mb-8 font">
                <span className="block">Hi</span>
                I'm Victor
            </h1>
            <p>I'm a web developer, with a background in interaction design.</p>
            <p>I thrive in frontend work, but have great understanding of backend tasks as well.</p>
            <p>I currently work at <Link className="cust-link" href={"#"}>Fluxscape</Link> as a Frontend Developer.</p>
            <p>I'm also a co-founder and design technologist in the interaction design studio <Link className="cust-link" href={"#"}>Circuit Circus</Link>.</p>
        </header>
    )
} 