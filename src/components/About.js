/*
 * @FilePath: About.js
 * @Author: Vivian L_qirui@163.com
 * @Date: 2023-03-19 11:23:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-19 18:21:42
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 
 */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Outlet,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice'
export default function About () {
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  let location = useLocation()
  const [count, setCount] = useState('');
  useEffect(() => {
    console.log('this.props', location, location?.state?.some ?? '')
    setCount(location?.state?.some ?? '')
  }, [location])
  return (
    <>
      <div onClick={() => dispatch(increment())}>
        about{count}{counter}
      </div>
      <Outlet />
    </>
  )
}