import { Component, createRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './Title.module.css'

interface Iprops {
    id?: string, //if no id is givem, it create one automatically 
    text: string | number, // has to be swapped with children
    height: number, // has to be removed later
    color: string,// has to be removed later
    onDrag: Function,
    onDragOver: Function,
}


export default class Title extends Component<Iprops> {

    myRef = createRef<HTMLDivElement>()
    id = ""

    constructor(props: Iprops) {
        super(props);
        this.id = props.id ? props.id : uuidv4();
        this.dragStart = this.dragStart.bind(this)
        this.dragOver = this.dragOver.bind(this)
    }

    dragStart() {
        this.props.onDrag(this.props.id)
    }

    dragOver(e: any) {
        this.props.onDragOver(e)
    }

    componentDidMount() {
        const element = this.myRef.current!
        /* Avoid break the list when component pass over component in transition*/
        element.addEventListener('transitionstart', function () {
            element.style.pointerEvents = "none"
        });

        element.addEventListener('transitionend', function () {
            element.style.pointerEvents = ""
        });
    }

    render() {
        return (
            <div
                draggable
                ref={this.myRef}
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
                id={this.props.id}
                style={{ height: this.props.height, backgroundColor: this.props.color }}>
                {this.props.text}
            </div>
        )
    }
}