import React, { Component } from 'react'
import './theme.less'
export default class Theme extends Component {

  getList() {
    return this.props.themes.map((theme,i)=>{
      return (
        <li className="theme-item" key={theme.id}>
          {theme.name}
        </li>
      )
    })
  }

  render() {

    return (
      <div>

        <ul className="sidebar-theme-list">
          {this.getList()}
        </ul>
      </div>
    )
  }
}

Theme.defaultProps = {
  themes: []
}
