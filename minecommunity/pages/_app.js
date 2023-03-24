import Navbar from './components/Navbar'
import './globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';

export default function App({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  </>
}
