import React, { Component } from 'react'
import './theme.less'
import { Link } from 'react-router'
export default class Theme extends Component {

  getList() {
    return this.props.themes.map((theme, i) => {
      return (
        <Link to={`/theme/${theme.id}`}>
          <li className="theme-item" key={theme.id}>
            {theme.name}
          </li>
        </Link>
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
