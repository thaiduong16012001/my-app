import {
  KHAM_SAN_PHU_KHOA,
  KHAM_RANG_HAM_MAT,
  KHAM_TIM_MACH,
  KHAM_TAI_MUI_HONG,
  USED,
  SKIP,
  WAI_TING,
  QL,
  CS,
  ADD_USER,
  ALL,
} from "../util/configText";
import { Options } from "../components/remoteSelect/SelectFilter";
export const dataService: Options[] = [
  {
    value: KHAM_TIM_MACH,
    label: "Khám Tim mạch",
  },
  {
    value: KHAM_SAN_PHU_KHOA,
    label: "Khám Sản - Phụ Khoa",
  },
  {
    value: KHAM_RANG_HAM_MAT,
    label: "Khám Răng Hàm Mặt",
  },
  {
    value: KHAM_TAI_MUI_HONG,
    label: "Khám Tai Mũi Họng",
  },
];
export const powerSupply: Options[] = [
  { label: "kiosk", value: "kiosk" },
  { label: "display counter", value: "display counter" },
  { label: "Hệ Thống", value: "Hệ Thống" },
];

export const opTionsStatus: Options[] = [
  { label: "Đang chờ", value: WAI_TING },
  { label: "Đã sử dụng", value: USED },
  { label: "Bỏ qua", value: SKIP },
];
export const optionsFC: Options[] = [
  { label: "Chức Năng Quản Lý", value: QL },
  { label: "Chức Năng Câp Số", value: CS },
  { label: "Chức Năng Thêm Tài Khoản", value: ADD_USER },
];

export const opTionsStatusUser: Options[] = [
  { label: "Hoạt Động", value: true },
  { label: "Ngưng Hoạt Động", value: false },
];
