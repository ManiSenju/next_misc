function Blog({data}){
    return (<div className='content'>
        <h1>{data}</h1>
        <h2>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</h2>
    </div>)
}

export default Blog;

export async function getServerSideProps(){
    console.log(`db user is: ${process.env.DB_USER}`)
    return {
        props:{
            data:'testing'
        }
    }
}