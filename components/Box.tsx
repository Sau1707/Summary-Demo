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
    data: any,
    element: any
}

export default function Box(props: Iprops) {
    const [context] = useContext(GlobalDataContext);
    let myRef = createRef<HTMLDivElement>()

    useEffect(() => {
        const element = myRef.current!
        /* Avoid break the list when component pass over component in transition*/
        element.addEventListener('transitionstart', () => element.style.pointerEvents = "none");
        element.addEventListener('transitionend', () => element.style.pointerEvents = "");
    }, [])

    if (!props.element) return <></>

    return (
        <div
            draggable
            id={props.data.id}
            ref={myRef}
            onDragStart={() => context.onDragStart(props.data.id)}
            onDragOver={(e) => context.onDragOver(e)}
            onDoubleClick={() => props.data ? context.openDialog = props.data.id : null}
        >
            <props.element.element
                {...props.data}
            />
            <props.element.dialog
                {...props.data}
                open={context.openDialog == props.data.id}
            />
        </div>
    )

}