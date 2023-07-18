import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeAlert: false
};

const alertSlice = createSlice({
  name: "canvasActiveSelection",
  initialState,
  reducers: {
    activateAlert(state) {
      state.activeAlert = true;
    },
    disactivateAlert(state) {
      state.activeAlert = false;
    }
  }
});

export const { activateAlert, disactivateAlert } = alertSlice.actions;
export default alertSlice.reducer;
