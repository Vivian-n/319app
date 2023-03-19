/*
 * @FilePath: index.js
 * @Author: Vivian L_qirui@163.com
 * @Date: 2023-03-19 10:25:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-19 12:13:01
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 
 */
import React from "react";
import {
  createHashRouter,
} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Team from "../components/Team";
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <>
      <About />
    </>,
    children: [
      {
        path: "/about/team",
        element: <Team />,
      },
    ],
  },
]);
console.log('router', router)
export default router