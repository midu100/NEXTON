import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: null,
    cartItems :JSON.parse(localStorage.getItem('Name')) || null

  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
    addToCart : (state, action) => {
      state.cartItems = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount , addToCart } = counterSlice.actions

export default counterSlice.reducer