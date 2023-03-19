import { Component } from "react";
import { Link } from "react-router-dom";
/*
 * @FilePath: Home.js
 * @Author: Vivian L_qirui@163.com
 * @Date: 2023-03-19 10:31:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-19 12:57:08
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 
 */
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  toAbout = () => {
    this.props.history.push('/about/' + '2')
  }
  render () {
    return (<>
      <div onClick={this.toAbout}>welcome Home</div>
      <Link to="about?tab=one" state={{ some: "value" }} >XXXX</Link>
    </>)
  }

}