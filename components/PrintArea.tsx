/* eslint-disable react/no-direct-mutation-state */
import style from './PrintArea.module.css'

import { Component, createRef } from 'react'
import Page from './Page'

/* 
    Print area box, steps:
    1) Render the entire context in a single page and oveflow the page,
    this has to be done since it's impossible to know the height of an element before
    has been added to the DOM.
    2) Once the entire list is rendered, the position of the element are taken and new
    sublist for elements to fit a single page are calculated
    3) Multiple pages are created and rendered with only the elements that fit the page

    To create animation:
    1) The posizion of all the elements are stored in an array 
    2) Once the page update, the new elements are moved to the old position and a transition effect if
    given to them
    3) The new position is stored for the next update

    TO DO: When the page is scrolled the position of the elements break since it's relative to the view
    of the page

    TO DO: Theoretically the first render can be done without displaying the elements to speed up the timing
    TO DO: The elements once rendered can be stored with useMemo 
*/


/* id is an unique identifier for the element */
type Coord = {
    x: number
    y: number
}

type Pos = {
    [id: string]: Coord
}

interface Props {
    children: JSX.Element[]
}

export default class Example extends Component<Props> {
    state = {
        pages: null,
        firstRender: true,
        arrays: [],
    };

    arrays: Array<Array<JSX.Element>> = []
    oldPos: Pos = {}

    myRef = createRef<HTMLDivElement>()

    /* Make the component mount for the first line, in order to calculate the other array */
    componentDidMount() {
        this.calculateArrays()
    }

    /* Handle rerender to behave like first render */
    shouldComponentUpdate() {
        if (this.state.pages == null) return true
        if (this.state.pages != null && !this.state.firstRender) {
            this.state.pages = null
            this.state.firstRender = true
            return true
        }
        return false
    }

    /* Once the component update, check if animation has to be done */
    componentDidUpdate() {
        if (this.state.firstRender && this.state.pages) {
            this.state.firstRender = false;
            this.animate()
            this.storePos()
            return
        }
        this.calculateArrays()
    }


    /* Render the remaining pages */
    renderContent() {
        return (
            <>
                {
                    this.state.arrays.map((el: Array<JSX.Element>, i: number) => {
                        return <Page key={i} > {el} </Page>
                    })
                }
            </>
        )
    }

    calculateArrays() {
        this.arrays = []
        const elements = this.myRef.current!.children[0].children // get all elements render in h
        let temp: Array<JSX.Element> = []
        let n = 1
        Array.from(elements).forEach((e: any, i: number) => {
            if (e.offsetLeft > 1095 * n) {
                this.arrays.push(temp)
                temp = []
                n += 1
            }
            temp.push(this.props.children[i])
        })
        this.arrays.push(temp)
        this.setState({ pages: 1, arrays: this.arrays })
    }

    /* Calculate all the elements position and store in this.oldPos */
    storePos() {
        Array.from(this.myRef.current!.children).map(i => {
            Array.from(i.children).map(e => {
                var el = document.getElementById(e.id)
                if (!el) return
                var rect = el.getBoundingClientRect()
                this.oldPos[e.id] = {
                    x: rect.left + document.documentElement.scrollLeft,
                    y: rect.top + document.documentElement.scrollTop
                }
            })
        })
    }

    /* */
    animate() {
        if (Object.keys(this.oldPos).length === 0) return;
        Array.from(this.myRef.current!.children).map(i => {
            Array.from(i.children).map(e => {
                const current = e.getBoundingClientRect()
                const last = this.oldPos[e.id]
                if (!last) return // if the element don't exist before 
                const [changeX, changeY] = [last.x - current.x - document.documentElement.scrollLeft, last.y - current.y - document.documentElement.scrollTop]
                if (!changeY) return;

                requestAnimationFrame(() => {
                    var el = document.getElementById(e.id)
                    if (!el) return
                    el.style.transform = `translateX(${changeX}px) translateY(${changeY}px)`;
                    el.style.transition = "transform 0s";

                    requestAnimationFrame(() => {
                        if (!el) return
                        el.style.transform = "";
                        el.style.transition = "transform 500ms";
                    })
                })
            })
        })
    }

    /* Render function */
    render() {
        return (
            <div ref={this.myRef} id="printContainer" className={style.container}>
                {!this.state.pages ? <Page> {this.props.children} </Page> : this.renderContent()}
            </div>
        )
    }
}