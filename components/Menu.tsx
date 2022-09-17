import style from "./Menu.module.css"
import { useState, useContext } from "react"
import { GlobalDataContext } from "../logic/Contex";

import Box from "./Box";

/* 
    Side Menu

    TO DO: Import file containg elements in menù and render them
    TO DO: Helpers tools like 3 -> 4 layout 
*/

export default function Menu() {
    const [context] = useContext(GlobalDataContext);
    const [open, setOpen] = useState(false)

    const DefaultElements = []

    for (let key in context.titleList) {
        DefaultElements.push(
            <Box
                key={Math.random()}
                element={context.titleList[key]}
                data={{
                    text: "Demo",
                    height: 100,
                    color: "#171717"
                }}
            />
        )
    }

    return (
        <div className={open ? style.mainBoxOpen : style.mainBoxClose}>
            <div className={`${style.fixed} ${open ? style.fixedOpen : style.fixedClose}`}>
                <div onClick={() => setOpen(!open)} className={`${style.trigger} ${open ? style.triggerClose : style.triggerOpen}`}></div>
                {
                    DefaultElements.map(e => e)
                }
            </div>
        </div>
    )
}

/* 



*/