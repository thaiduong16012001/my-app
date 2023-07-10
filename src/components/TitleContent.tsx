import "../css/TitleContent.scss"

import React from 'react';
type Props ={
    title:string,
    content:string |React.ReactElement
}
const TitleContent: React.FC<Props>= ({title,content})=>{
    return (<div className='boxTitleContent' style={{display:"flex"}}>
        <div className='title59'>{title}:</div>
        <div className='content'>{content}</div>
    </div>)
}
export default TitleContent