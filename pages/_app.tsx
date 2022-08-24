import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ElementContext from '../components/ElementsList';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ElementContext>
            <Component {...pageProps} />
        </ElementContext>
    )
}

export default MyApp
