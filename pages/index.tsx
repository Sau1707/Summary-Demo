/* eslint-disable react/no-direct-mutation-state */
import { useContext } from 'react'

import PrintArea from '../components/PrintArea'
import Box from '../components/Box' // da cambiare
import Menu from '../components/Menu'
import DummyType from '../elements/Dummy';

/*  Main index file */
import { GlobalDataContext } from '../logic/Contex';

export default function Home() {
    const [context] = useContext(GlobalDataContext);

    return (
        <div style={{ width: "100%", display: "inline-flex" }} >
            <Menu />
            <PrintArea>
                {
                    context.elementsList.map(e => {
                        return (
                            <Box
                                key={e.id}
                                element={DummyType}
                                data={e}
                            />
                        )
                    })
                }
            </PrintArea>
        </div >
    )
}
