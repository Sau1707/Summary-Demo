/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import PrintArea from '../components/PrintArea'
import Box from '../components/Box' // da cambiare

import Menu from '../components/Menu'

import { DummyType } from '../components/Dummy';

/* Import types */
import { Element } from "../types/Element"

/* 
    Elements in menù esist once

*/
const ELEMENTS = ["title"]

/*  Main index file */
import { ElementsList } from '../components/ElementsList';

export default class Home extends Component {
    static contextType = ElementsList
    context!: React.ContextType<typeof ElementsList>;

    drag = {} as Element

    constructor(props: any) {
        super(props);
        this.onDragStart = this.onDragStart.bind(this)
    }

    onDragStart(i: string) {
        /* Check if element is not dragged from title */
        let dragElement: Element
        if (!ELEMENTS.includes(i)) dragElement = this.context.getElement(i) as Element // this line might broke
        else dragElement = this.createElement(i) as unknown as Element
        this.drag = dragElement
    }

    handleDrag(e: React.DragEvent<HTMLDivElement>) {
        const target = e.target as HTMLTextAreaElement;
        /* If event is on current element, nothing has to happend */
        if (this.drag.id == target.id) return
        const targetPos = target.getBoundingClientRect()
        const overflow = targetPos.y + targetPos.height / 2 - e.pageY > 0
        const targetIndex = this.context.getIndex(target.id)

        if (!targetIndex) return

        const dragIndex = this.context.getIndex(this.drag.id) // get index of drag element in array
        if (dragIndex! - targetIndex! == -1 * (overflow ? 1 : -1)) return // if prec or next
        var copy = this.context.insertAndRemove(this.drag, targetIndex! + (overflow ? 0 : 1))
        /* Update array */
        this.context.setList(copy)
    }

    createElement(type: string) {
        if (type == "title") return {
            "id": uuidv4(),
            "height": Math.random() * (200 - 50) + 50,
            "color": `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            "number": (Math.random() + 1).toString(36).substring(7)
        }
    }

    render() {
        return (
            <div style={{ width: "100%", display: "inline-flex" }}>
                <Menu>
                    <Box
                        onDrag={() => this.onDragStart("title")}
                        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
                            this.handleDrag(e)
                        }}
                        element={DummyType}
                    >
                    </Box>
                </Menu>
                <PrintArea>
                    {this.context.list.map(e => {
                        return (
                            <Box
                                onDrag={this.onDragStart}
                                onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
                                    this.handleDrag(e)
                                }}
                                key={e.id}
                                element={DummyType}
                                data={e}
                            >
                            </Box>)
                    })}
                </PrintArea>
            </div >
        )
    }
}