import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalData from '../logic/Contex';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalData>
            <Component {...pageProps} />
        </GlobalData>
    )
}

export default MyApp
