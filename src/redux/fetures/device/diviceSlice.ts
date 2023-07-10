import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDevice } from "../../../service/device";

import { Divice } from "../../../database/Divice";

type InitialState = {
  ValueFilterActive: string | boolean;
  ValueFilterConnected: string | boolean;
  loading: boolean;
  ListAllDevices: Divice[];
  FilterListDevices: Divice[];
  ChangeData: boolean;
};

const initialState: InitialState = {
  ValueFilterActive: "All",
  ValueFilterConnected: "All",
  loading: false,
  ListAllDevices: [],
  FilterListDevices: [],
  ChangeData: false,
};

export const fetchDeviceAll = createAsyncThunk(
  "device/fetchDeviceAll",
  async () => {
    const response = await getDevice();

    return response;
  }
);

const DeviceSlice = createSlice({
  initialState: initialState,
  name: "ListDevices",
  reducers: {
    ChangeData: (state) => {
      state.ChangeData = !state.ChangeData;
    },
    ChangeFilterActive: (state, action: PayloadAction<string | boolean>) => {
      state.ValueFilterActive = action.payload;
    },
    ChangeFilterConnected: (state, action: PayloadAction<string | boolean>) => {
      state.ValueFilterConnected = action.payload;
    },
    FilterData: (state) => {
      let dk: boolean;
      state.FilterListDevices = state.ListAllDevices.filter((device) => {
        if (
          `${state.ValueFilterActive}`.toLowerCase() !== "All".toLowerCase() &&
          `${state.ValueFilterConnected}`.toLowerCase() !== "All".toLowerCase()
        ) {
          dk =
            device.statusActive === state.ValueFilterActive &&
            device.statusConnect === state.ValueFilterConnected;
        } else if (
          `${state.ValueFilterActive}`.toLowerCase() !== "All".toLowerCase() &&
          `${state.ValueFilterConnected}`.toLowerCase() === "All".toLowerCase()
        ) {
          dk = device.statusActive === state.ValueFilterActive;
        } else if (
          `${state.ValueFilterActive}`.toLowerCase() === "All".toLowerCase() &&
          `${state.ValueFilterConnected}`.toLowerCase() !== "All".toLowerCase()
        ) {
          dk = device.statusConnect === state.ValueFilterConnected;
        }
        return dk;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDeviceAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchDeviceAll.fulfilled,
      (state, action: PayloadAction<Divice[]>) => {
        state.loading = false;
        state.ListAllDevices = action.payload;
      }
    );
    builder.addCase(fetchDeviceAll.rejected, (state, action) => {
      state.loading = false;
      state.ListAllDevices = [];
    });
  },
});

export const {
  ChangeData,
  ChangeFilterActive,
  ChangeFilterConnected,
  FilterData,
} = DeviceSlice.actions;
export default DeviceSlice.reducer;
