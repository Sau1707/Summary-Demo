import style from './Page.module.css'

/*
    A Horizontal A4 page, get an array of elements and sort them in the correct formart

    TO DO: In combination with menù add button 3 -> 4
*/
export default function Page(props: any) {

    return (
        <div className={style.printPage}>
            {props.children.map((el: JSX.Element) => {
                return el
            })}
        </div>
    )
}