import axios from "axios";
import { API_DEVICE, API_DEVICE_PRARAM_ID } from "../util/configText";
import formatDefault from "../util/formatReponse";
import { ResBodyDevice } from "../database/Divice";

import AddActiveLogBody from "../util/bodyResActiveLogFC";
const getDevice = async () => {
  const res = await axios.get(API_DEVICE);
  return formatDefault(res);
};
const AddDevice = async (bodyRes: ResBodyDevice) => {
  const res = await axios.post(API_DEVICE, bodyRes);
  await AddActiveLogBody(`Thêm Thiết Bị "${bodyRes.name}"`);
  return res;
};
const UpdateDevice = async (id: string, bodyRes: ResBodyDevice) => {
  delete bodyRes.id;
  const res = await axios.patch(API_DEVICE_PRARAM_ID(id), bodyRes);
  await AddActiveLogBody(`Cập nhật Thiết Bị "${bodyRes.name}"`);
  return res;
};

export { getDevice, AddDevice, UpdateDevice };
