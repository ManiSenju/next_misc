import Header from "../components/Header";

function Comments(){
    return <div className='content'>Comments</div>
}

export default Comments;

Comments.getLayout = (page)=>{
    return <>
        <Header/>
        {page}
    </>
}