import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRole } from "../../../service/managerRoles";

import { Role } from "../../../database/Role";

type InitialState = {
  ValueFilterActive: string | boolean;
  ValueFilterConnected: string | boolean;
  loading: boolean;
  ListAllRoles: Role[];
  FilterListRoles: Role[];
  ChangeData: boolean;
};

const initialState: InitialState = {
  ValueFilterActive: "All",
  ValueFilterConnected: "All",
  loading: false,
  ListAllRoles: [],
  FilterListRoles: [],
  ChangeData: false,
};

export const fecthRoles = createAsyncThunk("device/fecthRoles", async () => {
  const response = await getRole();

  return response;
});

const RoleSlice = createSlice({
  initialState: initialState,
  name: "ListRoles",
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
    FilterData: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fecthRoles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fecthRoles.fulfilled,
      (state, action: PayloadAction<Role[]>) => {
        const customdata = action.payload.map((role) => ({
          ...role,
          listCN: JSON.parse(JSON.stringify(role?.listCN)),
        }));
        state.loading = false;
        state.ListAllRoles = customdata;
      }
    );
    builder.addCase(fecthRoles.rejected, (state) => {
      state.loading = false;
      state.ListAllRoles = [];
    });
  },
});

export const {
  ChangeData,
  ChangeFilterActive,
  ChangeFilterConnected,
  FilterData,
} = RoleSlice.actions;
export default RoleSlice.reducer;
