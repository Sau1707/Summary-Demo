/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react'
import PrintArea from '../components/PrintArea'
import Title from '../components/Title'
import { v4 as uuidv4 } from 'uuid';

import { insertAndRemove, getIndex, getElement, insertInList } from "../helpers/arrayUtil"
import data from "../data.json"
import Menu from '../components/Menu'

/* Import types */
import { Element } from "../types/Element"

interface Istate {
    elements: Array<Element>,
    drag?: Element | null
}

/* 
    Elements in menù esist once

*/
const ELEMENTS = ["title"]

export default class Home extends Component<Istate> {
    state = {
        elements: data,
        drag: {} as Element
    }

    constructor(props: any) {
        super(props);
        this.onDragStart = this.onDragStart.bind(this)
    }

    onDragStart(i: string) {
        /* Check if element is not dragged from title */
        let dragElement: Element
        if (!ELEMENTS.includes(i)) dragElement = getElement(this.state.elements, i) as Element // this line might broke
        else dragElement = this.createElement(i) as unknown as Element
        this.state.drag = dragElement
    }

    handleDrag(e: React.DragEvent<HTMLDivElement>) {
        const target = e.target as HTMLTextAreaElement;
        /* If event is on current element, nothing has to happend */
        if (this.state.drag.id == target.id) return
        const targetPos = target.getBoundingClientRect()
        const overflow = targetPos.y + targetPos.height / 2 - e.pageY > 0
        const targetIndex = getIndex(this.state.elements, target.id)

        if (!targetIndex) return

        const dragIndex = getIndex(this.state.elements, this.state.drag.id) // get index of drag element in array
        if (dragIndex! - targetIndex! == -1 * (overflow ? 1 : -1)) return // if prec or next
        var copy = insertAndRemove([...this.state.elements], this.state.drag, targetIndex! + (overflow ? 0 : 1))
        /* Update array */
        this.setState({ elements: copy })
        console.log(copy)
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
                    <Title
                        onDrag={() => this.onDragStart("title")}
                        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
                            this.handleDrag(e)
                        }}
                        height={100}
                        color={"#181818"}
                        text={"demo"}
                    />
                </Menu>
                <PrintArea>
                    {this.state.elements.map(e => {
                        return (
                            <Title
                                onDrag={this.onDragStart}
                                onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
                                    this.handleDrag(e)
                                }}
                                key={e.id}
                                id={e.id}
                                text={e.number}
                                height={e.height}
                                color={e.color}
                            />)
                    })}
                </PrintArea>
            </div >)
    }
}
