import { User } from "../database/User";
import { getStorage } from "../util/localStore";
import { AddActiveLog } from "../service/activeLog";
import { resBodyActiveLog } from "../database/ActiveLog";

const AddActiveLogBody = (operations: string) => {
  const user: User = getStorage("User") ?? {};
  
  const bodyResActiveLog: resBodyActiveLog = {
    userName: user?.email,
    timeImpact: new Date().toISOString(),
    ipImpact: "192.168.1.1",
    operations,
  };
  const res = AddActiveLog(bodyResActiveLog);
  return res;
};
export default AddActiveLogBody;
