/* eslint-disable react/no-direct-mutation-state */
import { Component, createContext } from "react"
import type { ElementSettings } from "../types/Element"

import { onDragStart, onDragOver } from "./handleDrag"
import { getIndex, getElement, insertElement, updateElement, generateElement, deleteElement } from "./util"
import { LoadTitles } from "./setup"


/* For demo use */
import data from "../data.json"
type Sizes = 2 | 3 | 4 | 5

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
        size: 2 as Sizes,
        dialog: ""
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

    /* Number of pages */
    get pagesCount() {
        return this.state.size
    }

    set pagesCount(newValue: string | Sizes) {
        switch (newValue) {
            case "large": case 2:
                this.setState({ size: 2 })
                break
            case "medium": case 3:
                this.setState({ size: 3 })
                break
            case "small": case 4:
                this.setState({ size: 4 })
                break
            case "tiny": case 5:
                this.setState({ size: 5 })
                break
        }
    }

    increasePageCount(n = 1) {
        let newSize = (this.state.size + n) % 6
        if (newSize == 0) newSize = 2
        this.pagesCount = newSize as Sizes
    }

    get openDialog() {
        return this.state.dialog
    }

    set openDialog(newValue) {
        this.setState({
            dialog: newValue
        })
    }

    saveDialog(newProps: object) {
        let updatedList = this.updateElement(this.state.dialog, newProps)
        if (!updatedList) return
        this.elementsList = updatedList
        this.openDialog = ""
    }

    /* Util function for array search and update*/
    public getIndex = getIndex;
    public getElement = getElement;
    public insertElement = insertElement;
    public updateElement = updateElement;
    public deleteElement = deleteElement;
    public generateElement = generateElement;

    /* handle drag*/
    public onDragStart = onDragStart;
    public onDragOver = onDragOver;


    render() {
        return (
            <GlobalDataContext.Provider value={[this]}>
                {this.props.children}
            </GlobalDataContext.Provider>
        )
    }
}