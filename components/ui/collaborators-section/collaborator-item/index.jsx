import Image from "next/image"

export default function CollaboratorItem(props) {
    console.log(props)

    return (
        <li className="flex items-center justify-center">
            <Image
                src={props.logo}
                alt={`${props.name} logo`}
                width={100}
                height={100}
                className="h-24 w-auto"
            />
        </li>
    )

}