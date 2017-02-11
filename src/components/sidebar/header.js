import React, {Component} from 'react'
import './header.less'
import img from './avatar.jpg'
export default class Header extends Component {
  render() {
    return (
      <div className="sidebar-header">
        <header>
          <img src={img} alt="" className="avatar"/>
          <span>请登录</span>
        </header>
      </div>
    )
  }
}