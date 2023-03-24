import Navbar from './components/Navbar'
import './globals.scss'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  </>
}
