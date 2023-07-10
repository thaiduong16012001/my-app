import React from 'react';
import { ADD_FORM } from '../../util/configText';
import FormServices from '../../components/Form/FormService';
import LayoutContent from "../../components/layOut/layOutContent";
const Device: React.FC= ()=>{
    return(<LayoutContent 
    title='Quản Lý Dịch Vụ'  
    Content={<FormServices type={ADD_FORM}/>}/>)
}
export default Device;