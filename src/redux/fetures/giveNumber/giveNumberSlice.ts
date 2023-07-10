import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getGiveNumber } from "../../../service/giveNumber";
import dayjs from "dayjs";
import { GiveNumber } from "../../../database/GiveNumber";
import { ALL } from "../../../util/configText";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);
type InitialState = {
  ValueFilterDV: string;
  ValueFilterStatus: string | number;
  ValueFilterpowerSupply: string;
  ValueTime: string[];
  ValueTimeReport: string[];
  loading: boolean;
  ListAllgiveNumber: GiveNumber[];
  FilterListgiveNumber: GiveNumber[];
  FilterListReport: GiveNumber[];
  ChangeData: boolean;
};

const initialState: InitialState = {
  ValueFilterDV: ALL,
  ValueFilterStatus: ALL,
  ValueFilterpowerSupply: ALL,
  ValueTime: [],
  ValueTimeReport: [],
  loading: false,
  ListAllgiveNumber: [],
  FilterListgiveNumber: [],
  FilterListReport: [],
  ChangeData: false,
};

export const fetchgiveNumberAll = createAsyncThunk(
  "device/fetchgiveNumberAll",
  async () => {
    const response = await getGiveNumber();

    return response;
  }
);

const giveNumberSlice = createSlice({
  initialState: initialState,
  name: "ListgiveNumber",
  reducers: {
    ChangeData: (state) => {
      state.ChangeData = !state.ChangeData;
    },
    ChangeFilterDV: (state, action: PayloadAction<string>) => {
      state.ValueFilterDV = action.payload;
    },
    ChangeValueFilterpowerSupply: (state, action: PayloadAction<string>) => {
      state.ValueFilterpowerSupply = action.payload;
    },
    ChangeValueTime: (state, action: PayloadAction<string[]>) => {
      state.ValueTime = action.payload;
    },
    ChangeValueTimeReport: (state, action: PayloadAction<string[]>) => {
      state.ValueTimeReport = action.payload;
    },
    ChangeValueFilterStatus: (
      state,
      action: PayloadAction<string | number>
    ) => {
      state.ValueFilterStatus = action.payload;
    },
    ChangeValueFilterList: (
      state,
      action: PayloadAction<{
        valueService: string;
        valueStatus: string | number;
        valuePowerSupply: string;
        valueTime: string[];
      }>
    ) => {
      state.FilterListgiveNumber = state.ListAllgiveNumber.filter((value) => {
        let dk;

        const dkTime =
          dayjs(value.grantTime).isBetween(
            dayjs(action.payload.valueTime[0]),
            dayjs(action.payload.valueTime[1]),
            "day"
          ) ||
          dayjs(action.payload.valueTime[0]).isSame(value.grantTime, "day") ||
          dayjs(action.payload.valueTime[1]).isSame(value.grantTime, "day");

        if (
          action.payload.valueService === ALL &&
          action.payload.valueStatus !== ALL
        ) {
          if (
            action.payload.valuePowerSupply === ALL &&
            action.payload.valueTime.length <= 0
          ) {
            dk = value.status === action.payload.valueStatus;
          } else if (
            action.payload.valuePowerSupply !== ALL &&
            action.payload.valueTime.length > 0
          ) {
            dk =
              value.status === action.payload.valueStatus &&
              action.payload.valuePowerSupply === value.powerSupply &&
              dkTime;
          } else if (
            action.payload.valuePowerSupply === ALL &&
            action.payload.valueTime.length > 0
          ) {
            dk = value.status === action.payload.valueStatus && dkTime;
          } else if (
            action.payload.valuePowerSupply !== ALL &&
            action.payload.valueTime.length <= 0
          ) {
            dk =
              value.status === action.payload.valueStatus &&
              action.payload.valuePowerSupply === value.powerSupply;
          }
        } else if (
          action.payload.valueService !== ALL &&
          action.payload.valueStatus === ALL
        ) {
          if (
            action.payload.valuePowerSupply === ALL &&
            action.payload.valueTime.length <= 0
          ) {
            dk = value.nameService === action.payload.valueService;
          } else if (
            action.payload.valuePowerSupply !== ALL &&
            action.payload.valueTime.length > 0
          ) {
            dk =
              value.nameService === action.payload.valueService &&
              action.payload.valuePowerSupply === value.powerSupply &&
              dkTime;
          } else if (
            action.payload.valuePowerSupply === ALL &&
            action.payload.valueTime.length > 0
          ) {
            dk = value.nameService === action.payload.valueService && dkTime;
          } else if (
            action.payload.valuePowerSupply !== ALL &&
            action.payload.valueTime.length < 0
          ) {
            dk =
              value.nameService === action.payload.valueService &&
              action.payload.valuePowerSupply === value.powerSupply;
          }
        } else if (
          action.payload.valueService === ALL &&
          action.payload.valueStatus === ALL
        ) {
          if (
            action.payload.valuePowerSupply !== ALL &&
            action.payload.valueTime.length > 0
          ) {
            dk =
              action.payload.valuePowerSupply === value.powerSupply && dkTime;
          } else if (
            action.payload.valuePowerSupply === ALL &&
            action.payload.valueTime.length > 0
          ) {
            dk = dkTime;
          } else if (
            action.payload.valuePowerSupply !== ALL &&
            action.payload.valueTime.length <= 0
          ) {
            dk = action.payload.valuePowerSupply;
          }
        } else if (
          action.payload.valueService !== ALL &&
          action.payload.valueStatus !== ALL &&
          action.payload.valuePowerSupply === ALL
        ) {
          if (action.payload.valueTime.length > 0) {
            dk =
              value.nameService === action.payload.valueService &&
              value.status === action.payload.valueStatus &&
              dkTime;
          } else if (action.payload.valueTime.length <= 0) {
            dk =
              value.nameService === action.payload.valueService &&
              value.status === action.payload.valueStatus;
          }
        } else if (
          action.payload.valueService !== ALL &&
          action.payload.valueStatus !== ALL &&
          action.payload.valuePowerSupply !== ALL &&
          action.payload.valueTime.length > 0
        ) {
          dk =
            value.nameService === action.payload.valueService &&
            value.status === action.payload.valueStatus &&
            action.payload.valuePowerSupply === value.powerSupply &&
            dkTime;
        }

        return dk;
      });
    },
    ChangeFilterTimeReport: (state, action: PayloadAction<string[]>) => {
      state.FilterListReport = state.ListAllgiveNumber.filter((value) => {
        const dkTime =
          dayjs(value.grantTime).isBetween(
            dayjs(action.payload[0]),
            dayjs(action.payload[1]),
            "day"
          ) ||
          dayjs(action.payload[0]).isSame(value.grantTime, "day") ||
          dayjs(action.payload[1]).isSame(value.grantTime, "day");

        return dkTime;
      });
    },
    RevertTime: (state) => {
      state.ValueTime = [];
      state.ValueTimeReport = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgiveNumberAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchgiveNumberAll.fulfilled,
      (state, action: PayloadAction<GiveNumber[]>) => {
        state.loading = false;
        action.payload.sort((a, b) => Number(a?.stt) - Number(b?.stt));
        state.ListAllgiveNumber = action.payload;
      }
    );
    builder.addCase(fetchgiveNumberAll.rejected, (state, action) => {
      state.loading = false;
      state.ListAllgiveNumber = [];
    });
  },
});

export const {
  ChangeData,
  ChangeFilterDV,
  ChangeValueFilterStatus,
  ChangeValueFilterList,
  ChangeValueFilterpowerSupply,
  ChangeValueTime,
  ChangeFilterTimeReport,
  ChangeValueTimeReport,
  RevertTime,
} = giveNumberSlice.actions;
export default giveNumberSlice.reducer;
