// api
const root = "https://quanlyxephang-591f7-default-rtdb.firebaseio.com/API";
export const API_USER = `${root}/users.json`;
export const API_DEVICE = `${root}/divices.json`;
export const API_SERVICE = `${root}/services.json`;
export const API_SERVICE_DETAIL = `${root}/servicesDetail.json`;
export const API_GIVE_NUMBER = `${root}/giveNumbers.json`;
export const API_MANAGER_ROLE = `${root}/managerRoles.json`;
export const API_ACTIVE_LOG = `${root}/activeLogs.json`;
export const API_USER_PRARAM_ID: (id: string) => string = (id) =>
  `${root}/users/${id}.json`;
export const API_DEVICE_PRARAM_ID: (id: string) => string = (id) =>
  `${root}/divices/${id}.json`;
export const API_SERVICE_PRARAM_ID: (id: string) => string = (id) =>
  `${root}/services/${id}.json`;
export const API_GIVE_NUMBER_PRARAM_ID: (id: string) => string = (id) =>
  `${root}/giveNumbers/${id}.json`;
export const API_MANAGER_ROLE_PRARAM_ID: (id: string) => string = (id) =>
  `${root}/managerRoles/${id}.json`;
// text
export const ADD_FORM = "addForm";
export const UPDATE_FORM = "updateForm";
export const SEARCH_DEVICES = "searchDevices";
export const SEARCH_SERVERS = "searchServers";
export const SEARCH_GIVE_NUMBER = "searchGiveNumber";
export const SEARCH_REPORTS = "searchReports";
export const STATUS_DONE = 1;
export const STATUS_IN_PROGRESS = 2;
export const STATUS_ABSENT = 0;
export const KHAM_TIM_MACH = "KhamTimMach";
export const KHAM_SAN_PHU_KHOA = "KhamSanPhuKhoa";
export const KHAM_RANG_HAM_MAT = "KhamRangHamMat";
export const KHAM_TAI_MUI_HONG = "KhamTaiMuiHong";
export const WAI_TING = 1;
export const USED = 2;
export const SKIP = 0;
export const ALL = "all";
export const QL = "QL";
export const CS = "CS";
export const ADD_USER = "addUser";
