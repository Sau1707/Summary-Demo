import style from "./Menu.module.css"
import { useState } from "react"

export default function Menu(props: any) {

    const [open, setOpen] = useState(false)

    return (
        <div className={open ? style.mainBoxOpen : style.mainBoxClose}>
            <div className={`${style.fixed} ${open ? style.fixedOpen : style.fixedClose}`}>
                <div onClick={() => setOpen(!open)} className={`${style.trigger} ${open ? style.triggerClose : style.triggerOpen}`}>
                </div>
                {props.children}
            </div>
        </div>
    )
}