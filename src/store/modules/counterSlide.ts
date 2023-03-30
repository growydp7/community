import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number;
  title: string
}

const initialState: CounterState = {
  value: 0,
  title: 'custom title'
}

const counterSlide = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      console.log('reducer', state)
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlide.actions
export default counterSlide.reducer