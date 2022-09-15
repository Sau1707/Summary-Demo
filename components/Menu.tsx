import style from "./Menu.module.css"
import { useState } from "react"
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import PrintIcon from '@mui/icons-material/Print';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

/* 
    Side Menu

    TO DO: Import file containg elements in menù and render them
    TO DO: Helpers tools like 3 -> 4 layout 
*/

export default function Menu(props: any) {

    const [open, setOpen] = useState(false)

    return (
        <div className={open ? style.mainBoxOpen : style.mainBoxClose}>
            <div className={`${style.fixed} ${open ? style.fixedOpen : style.fixedClose}`}>
                <div className={open ? style.buttonsOpen : style.buttonsClose}>
                    <ToggleButtonGroup color="primary" aria-label="text alignment">
                        <ToggleButton>
                            <PrintIcon />
                        </ToggleButton>,
                        <ToggleButton >
                            <Filter3Icon />
                        </ToggleButton>,
                        <ToggleButton>
                            <Filter4Icon />
                        </ToggleButton>,
                        <ToggleButton >
                            <FileDownloadIcon />
                        </ToggleButton>
                    </ToggleButtonGroup >
                </div>
                <div onClick={() => setOpen(!open)} className={`${style.trigger} ${open ? style.triggerClose : style.triggerOpen}`}></div>
                {props.children}
            </div>
        </div>
    )
}