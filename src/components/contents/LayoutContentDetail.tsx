import React from "react"
import   "../../css/Form.scss"
import { type } from "os"

type Props={
    title:string,
    children:React.ReactElement
}
const LayoutContentDetail:React.FC<Props> = ({title,children})=>{
    return (
    <div className="boxForm">
        <div className="Title" style={{marginBottom:"20px"}}>{title}</div> 
        {children}
    </div>
    )
}
export default LayoutContentDetail