export default function PageSection({ ...props }) {
    return (
        <section className="cust-content-container">
            {props.title &&
                <h2 className="text-4xl sm:text-text-5xl md:text-6xl font-ibm-serif font-semibold mb-8">{props.title}</h2>
            }
            {props.children && props.children}
        </section>
    )
}
