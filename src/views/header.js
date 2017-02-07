import React, { Component } from 'react'
import HeaderNav from '../components/header'
import { connect } from 'react-redux'
class Header extends Component {

  getLeftChildren() {
    const pathname = this.props.location.pathname
    if (pathname === '/') {
      return (
        <div className="header-left-nav">
          <span className="header-nav-button icon icon-bars"></span>
          <span className="header-nav-button">首页</span>
        </div>
      )
    } else if (/^\/detail\/\d+$/.test(pathname)) {
      return (
        <div className="header-left-nav">
          <span className="header-nav-button icon icon-arrow-left"></span>
        </div>
      )
    }

    return null
  }

  getRightChildren() {
    const pathname = this.props.location.pathname
    if (pathname === '/') {
      return (
        null
      )
    } else if (/^\/detail\/\d+$/.test(pathname)) {
      const {comments, popularity} = this.props
      return (
        <div className="header-right-nav">
          <span className="header-nav-button header-nav-number">
            <span className="icon icon-comment"></span>
            {comments}
          </span>
          <span className="header-nav-button header-nav-number">
            <span className="icon icon-thumbs-up"></span>
            {popularity}
          </span>
        </div>
      )
    }

    return null
  }

  render() {
    return (
      <HeaderNav>
          {this.getLeftChildren()}
          {this.getRightChildren()}
      </HeaderNav>
    )
  }
}

export default connect(
  (state) => {
    return {
      ...state.detail.extra
    }
  }
)(Header)
