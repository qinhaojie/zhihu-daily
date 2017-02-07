import React, { Component } from 'react'
import HeaderNav from '../components/header'
import { connect } from 'react-redux'
import { Link } from 'react-router'
class Header extends Component {


  goBack() {
    this.props.router.goBack()
  }

  getLeftChildren() {
    const pathname = this.props.location.pathname
    const back = <span className="header-nav-button icon icon-arrow-left" onClick={this.goBack.bind(this)}></span>
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
          {back}
        </div>
      )
    } else if (/^\/comment\/\d+$/.test(pathname)) {
      return (
        <div className="header-left-nav">
          {back}
          <span className="header-nav-button">
            {this.props.comments}条点评
          </span>
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
          <Link className="header-nav-button header-nav-number" to={`/comment/${this.props.params.id}`}>
            <span className="icon icon-comment"></span>
            {comments}
          </Link>
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
