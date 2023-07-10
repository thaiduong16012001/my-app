import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUser } from "../../../service/user";

import { User } from "../../../database/User";

type InitialState = {
  ValueFilterActive: string | boolean;
  ValueFilterConnected: string | boolean;
  loading: boolean;
  ListAllUser: User[];
  FilterListUser: User[];
  ChangeData: boolean;
};

const initialState: InitialState = {
  ValueFilterActive: "All",
  ValueFilterConnected: "All",
  loading: false,
  ListAllUser: [],
  FilterListUser: [],
  ChangeData: false,
};

export const fetchUserAll = createAsyncThunk(
  "device/fetchUserAll",
  async () => {
    const response = await getUser();
    return response;
  }
);

const UserSlice = createSlice({
  initialState: initialState,
  name: "ListUser",
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
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUserAll.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.ListAllUser = action.payload;
      }
    );
    builder.addCase(fetchUserAll.rejected, (state, action) => {
      state.loading = false;
      state.ListAllUser = [];
    });
  },
});

export const {
  ChangeData,
  ChangeFilterActive,
  ChangeFilterConnected,

} = UserSlice.actions;
export default UserSlice.reducer;
