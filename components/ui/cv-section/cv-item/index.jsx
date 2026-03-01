export default function CVItem({ ...props }) {
    const roles = props.roles;
    if(!roles) return

    return (
        <li className="flex flex-col w-full gap-1">
            <h3 className="text-xl font-bold">{props.employer}</h3>
            {roles && roles.map((role, _id) => (
                <hgroup key={_id} className="flex justify-between">
                    <h4 className="font-medium max-w-1/2">{role.title}</h4>
                    <small className="h-fit font-ibm-mono text-base w-24 opacity-50">{role.period}</small>
                </hgroup>
            ))
            }
        </li >
    )
}