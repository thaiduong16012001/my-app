import { ResBodyService, ResBodyServiceDetail } from "./../database/Service";
import axios from "axios";
import {
  API_SERVICE,
  API_SERVICE_PRARAM_ID,
  API_SERVICE_DETAIL,
} from "../util/configText";
import formatDefault from "../util/formatReponse";

import AddActiveLogBody from "../util/bodyResActiveLogFC";
const getService = async () => {
  const res = await axios.get(API_SERVICE);
  return formatDefault(res);
};
const getDetailService = async () => {
  const res = await axios.get(API_SERVICE_DETAIL);
  return formatDefault(res);
};
const AddService = async (bodyRes: ResBodyService) => {
  const res: any = await axios.post(API_SERVICE, bodyRes);
  await AddActiveLogBody(`Thêm dịch vụ "${bodyRes.name}"`);
  return res.data;
};
const AddServiceDetail = async (bodyRes: ResBodyServiceDetail) => {
  const res: any = await axios.post(API_SERVICE_DETAIL, bodyRes);
  return res.data;
};
const UpdateService = async (id: string, bodyRes: ResBodyService) => {
  delete bodyRes?.id;
  const res = await axios.patch(API_SERVICE_PRARAM_ID(id), bodyRes);
  await AddActiveLogBody(`Cập Nhật dịch vu"${bodyRes.name}"`);
  return res;
};

export {
  getService,
  AddService,
  UpdateService,
  getDetailService,
  AddServiceDetail,
};
