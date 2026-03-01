export default function PageSection({ ...props }) {
    return (
        <section className="cust-content-container">
            {props.title &&
                <>
                    <h2 className="font-ibm-serif text-3xl md:text-4xl">{props.title}</h2>
                    <hr className="my-4 text-teal-900/30"/>
                </>
            }
            {props.children && props.children}
        </section>
    )
}
