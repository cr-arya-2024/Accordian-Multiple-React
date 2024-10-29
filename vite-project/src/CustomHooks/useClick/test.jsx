import { useRef, useState } from "react"
import useOutsideClick from "."

export default function Test(){
const[show,setShow]=useState(false)
const ref=useRef()
useOutsideClick(ref,()=>setShow(false))
    return <div>
{
    show ?<div ref={ref}>
        <h1>hello</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eius error unde recusandae dolores provident blanditiis, suscipit <br>
        </br>optio facilis? Officiis alias deserunt modi voluptate explicabo deleniti laboriosam possimus illum quidem?
        <br></br>Est, eligendi nobis maiores ab aliquam suscipit odit placeat impedit rerum neque incidunt vitae, necessitatibus reiciendis molestias nihil? Sit nam molestias harum ad excepturi voluptatibus quo, nesciunt ipsum nobis possimus.</p>
    </div>:<button onClick={()=>setShow(true)}>clcik</button>
}
    </div>
}