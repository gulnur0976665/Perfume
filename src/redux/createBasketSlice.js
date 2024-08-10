import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const CreateBasketState = createSlice({
  name: "CREATE_BASKET",
  initialState,
  reducers: {
    addToBasket(state, action) {
      let bas = [...state.basket, action.payload];
      state.basket = bas;
      localStorage.setItem("basket", JSON.stringify(bas));
    },
    deleteBasket(state, action) {
      let filterBas = state.basket.filter((el) => el._id !== action.payload);
      state.basket = filterBas;
      localStorage.setItem("basket", JSON.stringify(filterBas));
    },
    inCrement(state, action) {
      let plus = state.basket.map((el) =>
        el._id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      state.basket = plus;
      localStorage.setItem("basket", JSON.stringify(plus));
    },
    desCrement(state, action) {
      let minus = state.basket.map((el) =>
        el._id === action.payload
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      state.basket = minus;
      localStorage.setItem("basket", JSON.stringify(minus));
    },
  },
});

export default CreateBasketState.reducer;
export const { addToBasket, deleteBasket, inCrement,desCrement} =
  CreateBasketState.actions;
