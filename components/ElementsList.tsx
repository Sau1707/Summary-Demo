import { createContext, useState, useEffect } from "react"

/* 
    Main provider for the elements list, this component shuld do: 
    0) Provide util function to edit and find elements in list
    1) Pass list to children with provider, the list is a state, update it means rerender the document
    2) Save new version on list update
*/

// for demo
import data from "../data.json"

export type ElementType = {
    list: Array<any>,
    setList: Function
    getIndex: Function,
    getElement: Function,
    insertElement: Function,
    insertAndRemove: Function
    updateElement: Function
}

export const ElementsList = createContext<ElementType>(
    {
        list: [],
        setList: () => { },
        getIndex: () => { },
        getElement: () => { },
        insertElement: () => { },
        insertAndRemove: () => { },
        updateElement: () => { },
    }
)

export default function ElementContext(props: any) {

    const [list, setList] = useState(data)

    /* Return index of given id */
    function getIndex(id: string) {
        var index = null
        list.map((e, i) => {
            if (e.id == id) index = i
        })
        return index
    }

    /* Return a copy of the element with given id */
    const getElement = (id: string) => {
        let index = getIndex(id)
        if (!index) return
        return { ...list[index] }
    }

    /* Insert element at specific index */
    const insertElement = (e: any, i: number) => {
        let copy = [...list]
        copy.splice(i, 0, e);
        return copy
    }

    /* Return a copy of the list */
    const insertAndRemove = (e: any, i: number) => {
        let copy = insertElement(e, i)
        copy = copy.filter((el, index) => {
            if (el.id != e.id || index == i) return i
        })
        return copy
    }

    /* Return a copy with the element updated */
    const updateElement = (id: string, n: object) => {
        let index = getIndex(id)
        if (!index) return
        let element = getElement(id)
        let updated = {
            ...element,
            ...n
        }
        let copy = insertAndRemove(updated, index)
        return copy
    }

    // TO DO: save new file version
    useEffect(() => {
        console.log("List has updated")
    }, [list])

    return (
        <ElementsList.Provider value={{ list, setList, getIndex, getElement, insertElement, insertAndRemove, updateElement }}>
            {props.children}
        </ElementsList.Provider>
    )
}