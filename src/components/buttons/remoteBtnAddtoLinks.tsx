import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

type Props= {
  name: string
  path: string
  state?:any
}
const BtnLinks : React.FC<Props> = ({name, path, state})=>{
    const navigate = useNavigate()
   
    return(<div className="addrole">
          <p className="add" >
            <div onClick={()=>{navigate(path, {state:state})}}  className="forgotpass" >
              +
            </div>
          </p>
          <p className="namerole">{name}</p>
        </div>)
}
export default BtnLinks