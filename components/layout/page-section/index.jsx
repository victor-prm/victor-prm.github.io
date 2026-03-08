export default function PageSection({ ...props }) {
    return (
        <section className={`
            ${props.transparent ? "cust-content-container-transparent" : "cust-content-container"}
            ${props.className || ""}
            `}
        >
            {props.title &&
                <>
                    <h2 className="font-ibm-serif text-3xl md:text-4xl">{props.title}</h2>
                    <hr className="my-4 text-lime-950/30" />
                </>
            }
            {props.children}
        </section>
    )
}
