export default function News({data}) {
    return <h1>{data}</h1>
}

export async function getStaticProps(context){
    console.log("Preview Data: ",context.previewData)
    return {
        props:{
            data: context.preview ? 'List of Draft Articles' : 'List of Articles'
        }
    }
}