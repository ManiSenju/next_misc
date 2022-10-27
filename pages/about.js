import Footer from "../components/Footer";
import Head from 'next/head'

function About(){
    return <>
        <Head>
            <title>Code Evolution</title>
            <meta name="description" content="free totube coding lessons" />
        </Head>
        <div className='content'>About</div>
    </>
}

export default About;

About.getLayout = function PageLayout (page) {
    return <>
        {page}
        <Footer/>
    </>
}