import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setbooks: (state, { payload }) => {
      state.books = payload;
    },
  },
});

const { reducer, actions } = bookSlice;
export const { setbooks } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
