import React, { Component, createRef } from 'react';
import { ElementsList } from '../components/ElementsList';
import { v4 as uuidv4 } from 'uuid';

/* 
    Main Box of each element, the box contoll the behavior of che element in it:
    
    1) On drag and drop move the element
    2) On double click open the gui:
        2.1) On gui close update the list with the new data - if has changed -
*/

interface Iprops {
    data?: any,
    onDrag: Function,
    onDragOver: Function,
    element: any,
    children: React.ReactNode
}

export default class Box extends Component<Iprops> {
    /* Load global array of elements */
    static contextType = ElementsList
    context!: React.ContextType<typeof ElementsList>;

    state = { dialog: false }
    myRef = createRef<HTMLDivElement>()
    data = {} as any

    constructor(props: Iprops) {
        super(props);
        /* Handle props - generate id if not given (element in title) */
        let tempData = props.data ? props.data : props.element.default
        tempData.id ? null : tempData.id = uuidv4()
        this.data = { ...tempData }
        /* Bind function to this */
        this.onDialogClose = this.onDialogClose.bind(this)
    }

    componentDidMount() {
        const element = this.myRef.current!
        /* Avoid break the list when component pass over component in transition*/
        element.addEventListener('transitionstart', () => element.style.pointerEvents = "none");
        element.addEventListener('transitionend', () => element.style.pointerEvents = "");
    }

    // TO DO: Check that new element is diffrent than starting one
    onDialogClose(e: any) {
        let updatedList = this.context.updateElement(this.data.id, e)
        this.context.setList(updatedList)
        this.setState({ dialog: false })
    }

    render() {
        return (
            <div
                draggable
                ref={this.myRef}
                onDragStart={() => this.props.onDrag(this.data.id)}
                onDragOver={(e) => this.props.onDragOver(e)}
                id={this.data.id}
                onDoubleClick={() => this.props.data ? this.setState({ dialog: true }) : null}
            >
                <this.props.element.dialog
                    {...this.data}
                    open={this.state.dialog}
                    onClose={this.onDialogClose}
                />
                <this.props.element.element
                    {...this.data}
                />
            </div>
        )
    }
}