import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {
  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return <>
  <Head>
    <title>Code Evolution</title>
    <meta name="description" content="free youtube lessons" />
  </Head>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
