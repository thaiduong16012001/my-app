import React from 'react';

type  Propschild= {
  type: string
}

type Props ={
    title?:string
    Search?:React.ReactElement
    Content : React.ReactElement
    BtnLinks?: React.ReactElement
}
const Layout: React.FC<Props> =({title,Search,Content,BtnLinks})=>{
    return(
    <div className="table">
          <div className="table_top" style={{display:"block"}}>
            <p className="list" style={{marginBottom:"16px"}}>{title}</p>
            <div className="find" style={{marginBottom:"20px"}}>
            {BtnLinks && BtnLinks} 
            {Search && Search}
            
            </div>
          </div>
          
          {Content}
                  
      </div>)
}
export default Layout