import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalShow: false,
};

const modalShowlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setModalShow: (state, { payload }) => {
      state.modalShow = payload;
    },
  },
});

const { reducer, actions } = modalShowlice;
export const { setModalShow } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
