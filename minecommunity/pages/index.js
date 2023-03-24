import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import Navbar from './components/Navbar'


const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MineCommunity</title>
        <meta name="description" content="Made by Cyanice Blitz Corps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      </main>
    </>
  )
}
