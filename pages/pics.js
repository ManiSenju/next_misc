import Image from "next/image"
function Pics () {
    return <>
    {['1','2','3','4','5'].map(path => {
        return (<div key={path}>
            <Image src={`/${path}.jpg`} placeholder='blur' blurDataURL={`/${path}.jpg`} alt='pics' width='280' height='420'/>
        </div>)
    })}
    </>
}

export default Pics