import React, { Component, createRef, useContext } from 'react';
import { Color, ColorPicker } from 'material-ui-color';
import { v4 as uuidv4 } from 'uuid';

interface Iprops {
    data?: any,
    onDrag: Function,
    onDragOver: Function,
    element: any,
    children: React.ReactNode
}
/* 
    Main Box of each element, the box contoll the behavior of che element in it:
    1) On drag and drop move the element
    2) On double click open the gui:
        2.1) On gui close update the list with the new data - if has changed -
*/
import { ElementsList } from '../components/ElementsList';

export default class Box extends Component<Iprops> {
    static contextType = ElementsList
    context!: React.ContextType<typeof ElementsList>;

    state = { dialog: false }

    myRef = createRef<HTMLDivElement>()
    data = {} as any

    constructor(props: Iprops) {
        super(props);
        let tempData = props.data ? props.data : props.element.default
        tempData.id ? null : tempData.id = uuidv4()
        this.data = { ...tempData }
        this.onDialogClose = this.onDialogClose.bind(this)
    }

    componentDidMount() {
        //console.log(this.context)
        const element = this.myRef.current!
        /* Avoid break the list when component pass over component in transition*/
        element.addEventListener('transitionstart', function () {
            element.style.pointerEvents = "none"
        });

        element.addEventListener('transitionend', function () {
            element.style.pointerEvents = ""
        });
    }

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