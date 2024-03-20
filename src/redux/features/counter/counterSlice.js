import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 5 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
const counterSliceReducer = counterSlice.reducer;
export default counterSliceReducer;