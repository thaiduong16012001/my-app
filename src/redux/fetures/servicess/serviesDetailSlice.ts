import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getDetailService}  from "../../../service/service";

import { ServiceDetailLocal } from "../../../database/Service";

type InitialState = {
  ValueFilterActive: string | boolean;
  ValueFilterConnected: string | boolean;
  loading: boolean;
  ListAllServiceDetail: ServiceDetailLocal[];
  FilterListServiceDetail: ServiceDetailLocal[];
  ChangeData: boolean;
};

const initialState: InitialState = {
  ValueFilterActive: "All",
  ValueFilterConnected: "All",
  loading: false,
  ListAllServiceDetail: [],
  FilterListServiceDetail: [],
  ChangeData: false,
};

export const fetchServiceDetail = createAsyncThunk(
  "device/fetchDeviceDetail",
  async () => {
    const response = await getDetailService();
    return response;
  }
);

const ServiceSlice = createSlice({
  initialState: initialState,
  name: "ListService",
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
    // FilterData: (state) => {
    //   let dk: boolean;
    //   state.FilterListService = state.ListAllService.filter((device) => {
    //     if (
    //       `${state.ValueFilterActive}`.toLowerCase() !== "All".toLowerCase() &&
    //       `${state.ValueFilterConnected}`.toLowerCase() !== "All".toLowerCase()
    //     ) {
    //       dk =
    //         device.statusActive === state.ValueFilterActive &&
    //         device.statusConnect === state.ValueFilterConnected;
    //     } else if (
    //       `${state.ValueFilterActive}`.toLowerCase() !== "All".toLowerCase() &&
    //       `${state.ValueFilterConnected}`.toLowerCase() === "All".toLowerCase()
    //     ) {
    //       dk = device.statusActive === state.ValueFilterActive;
    //     } else if (
    //       `${state.ValueFilterActive}`.toLowerCase() === "All".toLowerCase() &&
    //       `${state.ValueFilterConnected}`.toLowerCase() !== "All".toLowerCase()
    //     ) {
    //       dk = device.statusConnect === state.ValueFilterConnected;
    //     }
    //     return dk;
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServiceDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchServiceDetail.fulfilled,
      (state, action: PayloadAction<ServiceDetailLocal[]>) => {
        state.loading = false;
        state.ListAllServiceDetail = action.payload;
      }
    );
    builder.addCase(fetchServiceDetail.rejected, (state, action) => {
      state.loading = false;
      state.ListAllServiceDetail= [];
    });
  },
});

export const {
  ChangeData,
  ChangeFilterActive,
  ChangeFilterConnected,

} = ServiceSlice.actions;
export default ServiceSlice.reducer;
