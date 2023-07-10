import { User } from "./../database/User";
import axios from "axios";
import {
  API_USER,
  API_MANAGER_ROLE,
  API_MANAGER_ROLE_PRARAM_ID,
} from "../util/configText";
import formatDefault from "../util/formatReponse";
import { resBodyRole, Role } from "../database/Role";
import AddActiveLogBody from "../util/bodyResActiveLogFC";
const getRole = async () => {
  const resAll = await axios.all(
    [API_USER, API_MANAGER_ROLE].map((promise) => axios.get(promise))
  );
  const Users: User[] = formatDefault(resAll[0]);
  const Roles: Role[] = formatDefault(resAll[1]);
  const cusTomRoles: Role[] = Roles.map((role) => {
    const ListUserNumber = Users.filter((user) => user.role === role.id);
    return { ...role, numberUsed: ListUserNumber.length };
  });
  return cusTomRoles;
};
const AddRole = async (bodyRes: resBodyRole) => {
  const res = await axios.post(API_MANAGER_ROLE, bodyRes);
  await AddActiveLogBody(`Thêm Quyền "${bodyRes.name}"`);
  return res;
};
const UpdateRole = async (id: string, bodyRes: resBodyRole) => {
  delete bodyRes.id;
  const res = await axios.patch(API_MANAGER_ROLE_PRARAM_ID(id), bodyRes);
  await AddActiveLogBody(`Cập Nhật Quyền "${bodyRes.name}"`);
  return res;
};

export { getRole, AddRole, UpdateRole };
