import GlobalData from "./Contex"
import type { DragEvent } from "react"

/* Handle drag and drop */
export function onDragStart(this: GlobalData, i: string) {
    this.dragElement = {}
    let dragElement = this.getElement(i)
    /* If element not found, check in the title */
    if (!dragElement) dragElement = this.generateElement(i)
    this.dragElement = dragElement
}

export function onDragOver(this: GlobalData, e: DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLTextAreaElement;
    /* If event is on current element, nothing has to happend */
    if (this.dragElement.id == target.id) return
    /* Get index of the target element */
    const targetPos = target.getBoundingClientRect()
    const overflow = targetPos.y + targetPos.height / 2 - e.pageY > 0
    const targetIndex = this.getIndex(target.id)
    if (!targetIndex) return

    const dragIndex = this.getIndex(this.dragElement.id) // get index of drag element in array
    if (dragIndex! - targetIndex! == -1 * (overflow ? 1 : -1)) return // if prec or next
    var copy = this.insertElement(this.dragElement, targetIndex! + (overflow ? 0 : 1), true)
    /* Update array */
    this.elementsList = copy
}