import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    increase: (state, action) => {
      state.items[action.payload] = {
        ...state.items[action.payload],
        quantity: state.items[action.payload].quantity + 1,
      };
    },
    decrease: (state, action) => {
      state.items[action.payload] = {
        ...state.items[action.payload],
        quantity: state.items[action.payload].quantity - 1,
      };
    },
  },
});

export const { addItem, removeItem, increase, decrease } = basketSlice.actions;

export const selectBasket = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default basketSlice.reducer;
