/* eslint-disable react/no-direct-mutation-state */
import { useContext, useMemo } from 'react'

import PrintArea from '../components/PrintArea'
import Box from '../components/Box' // da cambiare
import Menu from '../components/Menu'
import DummyType from '../elements/Dummy';

/*  Main index file */
import { GlobalDataContext } from '../logic/Contex';

export default function Home() {
    const [context] = useContext(GlobalDataContext);
    /* Save data in a meno, if the data doen't change no need to new calcolation */
    const Data = useMemo(() => {
        return context.elementsList.map(e =>
            <Box
                key={e.id}
                element={DummyType}
                data={e}
            />
        )
    }, [context.elementsList])

    return (
        <div style={{ width: "100%", display: "inline-flex" }} >
            <Menu />
            <PrintArea>
                {
                    Data.map(e => e)
                }
            </PrintArea>
        </div >
    )
}
