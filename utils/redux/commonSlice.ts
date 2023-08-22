import { createSlice } from "@reduxjs/toolkit";
import { cartSliceDto } from "@/models/dto/cart-total.dto";
import { IProduct } from "@/models/dto/product.dto";

interface initialStateDto {
  isLoading: boolean;
  cartList: IProduct[];
  cartTotalDto: cartSliceDto;
}

const initialState: initialStateDto = {
  isLoading: false,
  cartList: [],
  cartTotalDto: {
    cartTotalPrice: 0,
    cartTotalCount: 0,
  },
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setLoading: (state: any, action: { payload: any }) => ({
      ...state,
      isLoading: action.payload,
    }),
    addBasket: (state, action) => ({
      ...state,
      cartList: action.payload,
    }),
    setCartTotal: (state, action) => ({
      ...state,
      cartTotalDto: action.payload,
    }),
  },
});

export const { setLoading, addBasket, setCartTotal } = commonSlice.actions;
export default commonSlice.reducer;
