export default function CVItem({ ...props }) {
    return (
        <li className="flex max-md justify-between w-full">
            <hgroup className="flex flex-col max-w-2/3">
                <h3 className="font-semibold">{props.role}</h3>
                <p>{props.employer}</p>
            </hgroup>
            <small className="h-fit font-ibm-mono text-base w-24 opacity-50">{props.start}-{props.end}</small>
        </li>

    )
}