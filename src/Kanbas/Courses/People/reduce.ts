import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  people: [],
};
const peoplesSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeople: (state, action) => {
      state.people = action.payload;
    },

  },
});
export const { setPeople  } =
peoplesSlice.actions;
export default peoplesSlice.reducer;