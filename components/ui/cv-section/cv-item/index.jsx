export default function CVItem({ ...props }) {
    const roles = props.roles;
    if (!roles) return

    return (
        <li className="flex flex-col w-full gap-1">
            <h3 className="text-xl font-medium">{props.employer}</h3>



            {roles && (
                <ol className="flex flex-col gap-3">
                    {roles.map((role, _id) => (
                        <li key={_id} className="flex justify-between gap-2">
                            <h4 className="text-sm md:text-base max-w-2/3 opacity-70">{role.title}</h4>
                            <small className="text-sm md:text-base h-fit font-ibm-mono font-light w-24 opacity-50 shrink-0">{role.period}</small>
                        </li>
                    ))}
                </ol>
            )
            }
        </li >
    )
}