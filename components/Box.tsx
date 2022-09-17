import { createRef, useContext, useState, useEffect } from 'react';
import { GlobalDataContext } from '../logic/Contex';
import { v4 as uuidv4 } from 'uuid';

/* 
    Main Box of each element, the box contoll the behavior of che element in it:
    
    1) On drag and drop move the element
    2) On double click open the gui:
        2.1) On gui close update the list with the new data - if has changed -
*/

interface Iprops {
    data?: any,
    element: any
}

export default function Box(props: Iprops) {
    let myRef = createRef<HTMLDivElement>()
    let data = {} as any
    const [open, setOpen] = useState(false)
    const [context] = useContext(GlobalDataContext);

    let tempData = props.data ? props.data : props.element.default
    tempData.id ? null : tempData.id = uuidv4()
    data = { ...tempData }

    const onDialogClose = (e: any) => {
        let updatedList = context.updateElement(data.id, e)
        if (!updatedList) return
        context.elementsList = updatedList
        setOpen(false)
    }

    useEffect(() => {
        const element = myRef.current!
        /* Avoid break the list when component pass over component in transition*/
        element.addEventListener('transitionstart', () => element.style.pointerEvents = "none");
        element.addEventListener('transitionend', () => element.style.pointerEvents = "");
    }, [])

    return (
        <div
            draggable
            id={data.id}
            ref={myRef}
            onDragStart={() => context.onDragStart(data.id)}
            onDragOver={(e) => context.onDragOver(e)}
            onDragEnd={() => context.onDragEnd()}
            onDoubleClick={() => props.data ? setOpen(true) : null}
        >
            <props.element.dialog
                {...data}
                open={open}
                onClose={onDialogClose}
            />
            <props.element.element
                {...data}
            />
        </div>
    )

}