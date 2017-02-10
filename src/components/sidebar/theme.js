import React, { Component } from 'react'
import './theme.less'
import { Link } from 'react-router'
export default class Theme extends Component {

  getList() {
    return this.props.themes.map((theme, i) => {
      return (
        <Link to={`/theme/${theme.id}`} key={theme.id} activeClassName="theme-item--active">
          <li className="theme-item" onClick={this.props.onItemClick}>
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
          <Link to='/' activeClassName="theme-item--active" onlyActiveOnIndex={true}>
            <li className="theme-item theme-item--home" onClick={this.props.onItemClick}>
              <span className="icon icon-home"></span>
              首页
            </li>
          </Link>
          {this.getList()}
        </ul>
      </div>
    )
  }
}

Theme.defaultProps = {
  themes: [],
  onItemClick: () => {}
}
