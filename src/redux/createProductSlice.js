import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  modall: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const CreateProductSlice = createSlice({
  name: "CREATE_PRODUCT",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.product = action.payload;
    },
    productDelete(state, action) {
      state.product = action.payload;
    },
    setModall(state, action) {
      state.modall = action.payload;
    },
    getUser(state, action) {
      state.user = action.payload;
      // localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});
export const { getProduct, productDelete, setModall, getUser } =
  CreateProductSlice.actions;
export default CreateProductSlice.reducer;
