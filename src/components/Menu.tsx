import MenuItems from "./MenuItems"

import { VscGithubAlt } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";

export default function Menu() {
    return (
        <aside className="flex flex-1 w-64 bg-zinc-900 h-screen">
            <nav className="flex flex-col gap-2 py-7 px-5">
                <p className="text-zinc-600 font-semibold mb-5">
                    Expense controller
                </p>
                <MenuItems text={"Create new expenses"} url={"/form"} icon={FaPlus}/>
                <MenuItems text={"Check out my github"} url={"https://github.com/NuneszG"} icon={VscGithubAlt}/>
                <MenuItems text={"Help me on Linkedin"} url={"https://www.linkedin.com/in/guilherme-nunes-dos-santos-a89827274/"} icon={RiLinkedinFill}/>
            </nav>
        </aside>
    )
}