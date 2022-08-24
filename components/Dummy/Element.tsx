interface Iprops {
    text: string | number
    height: number
    color: string
}

export default function Dummy(props: Iprops) {
    return (
        <div
            style={{ height: props.height, backgroundColor: props.color, pointerEvents: "none" }}
        >
            <h1
                style={{ margin: 0 }}
            > {props.text} </h1>
        </div>
    )
}