import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getService } from "../../../service/service";

import { Service } from "../../../database/Service";

type InitialState = {
  ValueFilterActive: string | boolean;
  ValueFilterConnected: string | boolean;
  loading: boolean;
  ListAllService: Service[];
  FilterListService: Service[];
  ChangeData: boolean;
};

const initialState: InitialState = {
  ValueFilterActive: "All",
  ValueFilterConnected: "All",
  loading: false,
  ListAllService: [],
  FilterListService: [],
  ChangeData: false,
};

export const fetchServiceAll = createAsyncThunk(
  "device/fetchDeviceAll",
  async () => {
    const response = await getService();
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
    builder.addCase(fetchServiceAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchServiceAll.fulfilled,
      (state, action: PayloadAction<Service[]>) => {
        state.loading = false;
        state.ListAllService = action.payload;
      }
    );
    builder.addCase(fetchServiceAll.rejected, (state, action) => {
      state.loading = false;
      state.ListAllService = [];
    });
  },
});

export const {
  ChangeData,
  ChangeFilterActive,
  ChangeFilterConnected,

} = ServiceSlice.actions;
export default ServiceSlice.reducer;
