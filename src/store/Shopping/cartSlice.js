import { createSlice } from "@reduxjs/toolkit";
const initialState ={
        cartItems:[],
        totalQuantity: 0,
        totalAmount: 0
    
     }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            state.totalQuantity++

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        },
        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            state.totalQuantity--

            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        },
        deleteItem(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity -= existingItem.quantity
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        },
    }
})

export const cartActions = cartSlice.actions
export default cartSlice

 