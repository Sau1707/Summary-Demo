import style from "./DialogMenu.module.css"
import { FiX, FiTrash2, FiCheck } from 'react-icons/fi';
import { GlobalDataContext } from "../logic/Contex";
import { useContext } from "react";

export default function DialogMenu(props: any) {
    let [context] = useContext(GlobalDataContext)

    const deleteElement = () => {
        context.deleteElement(props.id)
    }

    const closeDialog = () => {
        context.openDialog = ""
    }

    const saveElement = () => {
        props.onSave()
    }

    return (
        <div className={style.mainBox}>
            <FiCheck
                size={30}
                color="green"
                cursor="pointer"
                onClick={saveElement}
            />
            <FiX
                size={30}
                color="orange"
                cursor="pointer"
                onClick={closeDialog}
            />
            <FiTrash2
                size={30}
                color="red"
                cursor="pointer"
                onClick={deleteElement}
            />
        </div>
    )
}