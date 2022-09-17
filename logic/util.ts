import GlobalData from "./Contex"

/* Return index of given id, if title is true search in the title array */
export function getIndex(this: GlobalData, id: string): null | any {
    var index = null
    var array = this.elementsList
    array.map((e, i) => {
        if (e.id == id) index = i
    })
    return index
}

/* Return a copy of the element with given id, search before in title, then in the array */
export function getElement(this: GlobalData, id: string) {
    let index = this.getIndex(id) //check elements
    if (index) return { ...this.elementsList[index] }
    return null
}

/* Insert element at specific index */
export function insertElement(this: GlobalData, e: any, i: number, remove = false) {
    let copy = [...this.elementsList]
    copy.splice(i, 0, e);
    if (remove) copy = copy.filter((el, index) => {
        if (el.id != e.id || index == i) return i
    })
    return copy
}

/* Return a copy with the element updated */
export function updateElement(this: GlobalData, id: string, n: object) {
    let index = this.getIndex(id)
    if (!index) return
    let element = this.getElement(id)
    let updated = {
        ...element,
        ...n
    }
    let copy = this.insertElement(updated, index, true)
    return copy
}