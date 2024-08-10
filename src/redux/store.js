import { configureStore } from "@reduxjs/toolkit";
import CreateProductSlice from "./createProductSlice";
import CreateBasketState from "./createBasketSlice";

export const store = configureStore({
  reducer: {
    pro: CreateProductSlice,
    bas: CreateBasketState,
  },
});
