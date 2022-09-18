import style from "./Menu.module.css"
import { useState, useContext } from "react"
import { GlobalDataContext } from "../logic/Contex";

import Box from "./Box";

import PrintIcon from '@mui/icons-material/Print';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import Filter5Icon from '@mui/icons-material/Filter5';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { ToggleButton, ToggleButtonGroup } from "@mui/material"
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
                    id: key,
                    ...context.titleList[key].default
                }}
            />
        )
    }

    return (
        <div className={open ? style.mainBoxOpen : style.mainBoxClose}>
            <div className={`${style.fixed} ${open ? style.fixedOpen : style.fixedClose}`}>
                <div className={open ? style.buttonsOpen : style.buttonsClose}>
                    <ToggleButtonGroup color="info" className={style.buttonGroup} aria-label="settings">
                        <ToggleButton value="1" onClick={() => context.increasePageCount()}>
                            {context.pagesCount == 2 ? <Filter2Icon /> : <></>}
                            {context.pagesCount == 3 ? <Filter3Icon /> : <></>}
                            {context.pagesCount == 4 ? <Filter4Icon /> : <></>}
                            {context.pagesCount == 5 ? <Filter5Icon /> : <></>}
                        </ToggleButton>,
                        <ToggleButton value="2">
                            <PrintIcon />
                        </ToggleButton>,
                        <ToggleButton value="4">
                            <FileDownloadIcon />
                        </ToggleButton>
                    </ToggleButtonGroup >
                </div>
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