/* 
    Sizes:
    large: 539.109
    medium: 354.062
    small: 261.547
    tiny: 206.031
*/

export default function Sizes(props: any) {
    return (
        <>
            <Large>
                {props.children}
            </Large>
            <Medium>
                {props.children}
            </Medium>
            <Small>
                {props.children}
            </Small>
            <Tiny>
                {props.children}
            </Tiny>
        </>

    )
}
export function Large(props: any) {
    return (
        <div>
            <div style={{ display: "inline-flex" }}>
                <div style={{ margin: "auto", width: 100 }}>
                    <h3> Large </h3>
                </div>
                <div style={{ width: 539.109, margin: 10 }}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export function Medium(props: any) {
    return (
        <div>
            <div style={{ display: "inline-flex" }}>
                <div style={{ margin: "auto", width: 100 }}>
                    <h3> Medium </h3>
                </div>
                <div style={{ width: 354.062, margin: 10 }}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export function Small(props: any) {
    return (
        <div>
            <div style={{ display: "inline-flex" }}>
                <div style={{ margin: "auto", width: 100 }}>
                    <h3> Small </h3>
                </div>
                <div style={{ width: 261.547, margin: 10 }}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export function Tiny(props: any) {
    return (
        <div>
            <div style={{ display: "inline-flex" }}>
                <div style={{ margin: "auto", width: 100 }}>
                    <h3> Tiny </h3>
                </div>
                <div style={{ width: 206.031, margin: 10 }}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}