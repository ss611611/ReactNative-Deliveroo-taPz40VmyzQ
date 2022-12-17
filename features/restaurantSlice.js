import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null,
      },
}

export const basketSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = restaurantSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export default restaurantSlice.reducer