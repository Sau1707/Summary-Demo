/* eslint-disable react/no-direct-mutation-state */
import { Component, createContext } from "react"
import { v4 as uuidv4 } from 'uuid';

import { onDragStart, onDragOver, onDragEnd } from "./handleDrag"
import { getIndex, getElement, insertElement, updateElement } from "./util"
import { LoadTitles } from "./setup"
/* For demo use */
import data from "../data.json"

import type { ElementSettings } from "../types/Element"

type Sizes = "book" | "2" | "3" | "4"

export const GlobalDataContext = createContext<[GlobalData]>(undefined!)

/* Handle the logic */
export default class GlobalData extends Component {
    /* Load setup functions */
    private LoadTitles = LoadTitles;

    props;
    constructor(props: { children: React.ReactNode }) {
        super(props); this.props = props;

        this.LoadTitles()
    }

    dragElement = {} as any// current element on drag
    titleList = {} as ElementSettings
    state = {
        elementsList: data as Array<any>, // array containing the structure
        size: "book" as Sizes
    }

    /* Getter and setter for get and update elementList */
    get elementsList() {
        return this.state.elementsList
    }

    set elementsList(newValue) {
        this.setState({
            elementsList: newValue
        })
    }

    /* Util function for array search and update*/
    public getIndex = getIndex;
    public getElement = getElement;
    public insertElement = insertElement;
    public updateElement = updateElement;

    /* handle drag*/
    public onDragStart = onDragStart;
    public onDragOver = onDragOver;
    public onDragEnd = onDragEnd;

    render() {
        return (
            <GlobalDataContext.Provider value={[this]}>
                {this.props.children}
            </GlobalDataContext.Provider>
        )
    }
}

/* 
createElement(type: string) {
    if (type == "title") return {
        "id": uuidv4(),
        "height": Math.random() * (200 - 50) + 50,
        "color": `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        "number": (Math.random() + 1).toString(36).substring(7)
    }
}

*/