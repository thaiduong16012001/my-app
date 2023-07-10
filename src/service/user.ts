import { resBodyUser, User } from "./../database/User";
import axios from "axios";
import {
  API_USER,
  API_USER_PRARAM_ID,
  API_MANAGER_ROLE,
} from "../util/configText";
import formatDefault from "../util/formatReponse";
import AddActiveLogBody from "../util/bodyResActiveLogFC";
import { Role } from "../database/Role";
const getUser = async () => {
  const [reqUser, reqRole] = await axios.all(
    [API_USER, API_MANAGER_ROLE].map((promise) => axios.get(promise))
  );
  const Users: User[] = formatDefault(reqUser);
  const Roles: Role[] = formatDefault(reqRole);

  const cusTomUser = Users.map((user) => {
    const { name }: Role = Roles.find((role) => role.id === user.role) ?? {};
    return { ...user, role: name };
  });
  return cusTomUser;
};
const AddUser = async (bodyRes: resBodyUser) => {
  const res = await axios.post(API_USER, bodyRes);
  await AddActiveLogBody(`Thêm tài khoản "${bodyRes.username}"`);
  return res;
};
const UpdateUser = async (id: string, bodyRes: resBodyUser) => {
  const res = await axios.patch(API_USER_PRARAM_ID(id), bodyRes);
  await AddActiveLogBody(`Cập Nhật tài khoản "${bodyRes.username}"`);
  return res;
};
export { getUser, AddUser, UpdateUser };
