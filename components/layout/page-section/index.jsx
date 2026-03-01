export default function PageSection({ ...props }) {
    return (
        <section className="cust-content-container">
            {props.title &&
                <>
                    <h2 className="text-teal-950/80 text-4xl sm:text-text-5xl md:text-6xl font-ibm-serif font-semibold">{props.title}</h2>
                    <hr className="my-4 text-teal-950/30"/>
                </>
            }
            {props.children && props.children}
        </section>
    )
}
