import style from './Page.module.css'
import { GlobalDataContext } from '../logic/Contex'
import { useContext } from 'react'
/*
    A Horizontal A4 page, get an array of elements and sort them in the correct formart

    TO DO: In combination with menù add button 3 -> 4
*/
export default function Page(props: any) {
    const [context] = useContext(GlobalDataContext)

    return (
        <div className={style.printPage} style={{ columnCount: context.pagesCount }}>
            {
                props.children.map((el: JSX.Element) => {
                    return el
                })
            }
        </div>
    )
}