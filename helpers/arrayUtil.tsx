import { Element } from "../types/Element"

/* Get an element id => Return index of that element in list */
export function getIndex(l: Array<Element>, id: string) {
    var index = null
    l.map((e, i) => {
        if (e.id == id) index = i
    })
    return index
}

/* Insert element at specific index */
export function insertInList(l: Array<Element>, e: Element, i: number) {
    l.splice(i, 0, e);
    return l
}

/* Remove and id from list*/
export function removeElement(l: Array<Element>, e: Element) {
    l = l.filter(i => {
        if (i.id != e.id) return i
    })
    return l
}

/* Insert element at specific index and remove any others elements */
export function insertAndRemove(l: Array<Element>, e: Element, i: number) {
    l = insertInList(l, e, i)
    l = l.filter((el, index) => {
        if (el.id != e.id || index == i) return i
    })
    return l
}

export function getElement(l: Array<Element>, id: string) {
    let index = getIndex(l, id)
    if (!index) return
    return l[index]
}