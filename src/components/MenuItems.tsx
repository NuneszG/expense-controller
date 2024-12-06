import { ElementType } from "react"

interface Items {
    url: string
    text: string
    icon: ElementType
}

export default function MenuItems(props: Items) {
    return (
        <>
            <a href={props.url} className="text-zinc-500 flex gap-2 px-2 py-2 hover:bg-zinc-800 hover:scale-105 duration-200 rounded font-semibold">
            <props.icon className="text-zinc-500" size={24} stroke={1} />
                <span>{props.text}</span>
            </a> 
        </>
    )
}