/*
 * @FilePath: counterSlice.js
 * @Author: Vivian L_qirui@163.com
 * @Date: 2023-03-19 17:57:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-19 18:15:36
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 
 */
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {

      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer