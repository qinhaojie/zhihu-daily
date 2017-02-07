import React, { Component } from 'react'
import './header.less'
export default class HeaderNav extends Component {

  constructor(props) {
    super(props)

  }

  getChildren() {
    if (!this.props.children) {
      return [
        <span className="header-nav"> <span className="icon icon-bars"></span></span>,
        <span className="header-nav">首页</span>
      ]
    }
    return this.props.children
  }

  render() {

    var children = this.getChildren()

    return (
      <header className='header'>
        {children}
      </header>
    )
  }
}