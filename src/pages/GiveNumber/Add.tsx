import React from 'react';
import { ADD_FORM } from '../../util/configText';
import FormGiveNumber from '../../components/Form/FormGiveNumber';
import LayoutContent from "../../components/layOut/layOutContent";
const Device: React.FC= ()=>{
    return(<LayoutContent 
    title='Quản Lý Cấp Số'  
    Content={<FormGiveNumber type={ADD_FORM}/>}/>)
}
export default Device;
