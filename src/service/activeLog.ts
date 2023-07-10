import axios from "axios";
import { API_ACTIVE_LOG } from "../util/configText";
import formatDefault from "../util/formatReponse";
import {resBodyActiveLog}from "../database/ActiveLog"
const getActiveLog = async()=>{
    const res = await axios.get(API_ACTIVE_LOG);
    return formatDefault(res);
}
const AddActiveLog = (bodyRes:resBodyActiveLog)=>{
    const res =  axios.post(API_ACTIVE_LOG, bodyRes);
    return res
}


export {getActiveLog,AddActiveLog}