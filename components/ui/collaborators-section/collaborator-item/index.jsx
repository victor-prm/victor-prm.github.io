import Image from "next/image"

export default function CollaboratorItem(props) {
    return (
        <li className="flex items-center justify-center">
            <Image
                src={props.logo}
                alt={`${props.name} logo`}
                width={100}
                height={100}
                className="h-12 md:h-18 w-auto"
            />
        </li>
    )

}