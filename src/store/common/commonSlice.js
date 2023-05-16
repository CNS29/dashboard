import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    setMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = common.actions;

export default common.reducer;
