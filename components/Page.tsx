import styles from './PrintArea.module.css'

export default function Page(props: any) {

    return (
        <div className={styles.printPage}>
            {props.children.map((el: JSX.Element) => {
                return el
            })}
        </div>
    )
}