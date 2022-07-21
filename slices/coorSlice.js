import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
};

export const coorSlice = createSlice({
  name: "coor",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    },
  },
});

export const { setDestination, setOrigin, setTravelTimeInfo } =
  coorSlice.actions;
export const selecetOrigin = (state) => state.coor.origin;
export const selectDestination = (state) => state.coor.destination;
export const selectTravelTimeInfo = (state) => state.coor.travelTimeInfo;

export default coorSlice.reducer;
