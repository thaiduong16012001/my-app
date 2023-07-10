import axios from "axios";
import { API_GIVE_NUMBER, API_GIVE_NUMBER_PRARAM_ID } from "../util/configText";
import formatDefault from "../util/formatReponse";
import { ResBodyGiveNumber } from "../database/GiveNumber";
import AddActiveLogBody from "../util/bodyResActiveLogFC";
const getGiveNumber = async () => {
  const res = await axios.get(API_GIVE_NUMBER);
  return formatDefault(res);
};
const AddGiveNumber = async (bodyRes: ResBodyGiveNumber) => {
  const res = await axios.post(API_GIVE_NUMBER, bodyRes);
  await AddActiveLogBody(`Thêm Một phiếu Stt "${bodyRes.stt}"`);
  return res;
};
const UpdateGiveNumber = async (id: string, bodyRes: ResBodyGiveNumber) => {
  delete bodyRes.id;
  const res = await axios.patch(API_GIVE_NUMBER_PRARAM_ID(id), bodyRes);
  await AddActiveLogBody(`Cập Nhật phiếu Stt "${bodyRes.stt}"`);
  return res;
};

export { getGiveNumber, AddGiveNumber, UpdateGiveNumber };
