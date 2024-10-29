import useResize from "."

export default function Test2(){

const{width,height}=useResize()
    return <div>
        <p>width:{width}</p>
        <p>height:{height}</p>
    </div>
}