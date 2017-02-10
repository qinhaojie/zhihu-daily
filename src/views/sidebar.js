import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Drawer from '../components/helper/drawer'
import Theme from '../components/sidebar/theme'
import Header from '../components/sidebar/header'
import * as actions from './sidebarRedux'
import './sidebar.less'
class Sidebar extends Component {

  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    this.props.action.loadThemes()
  }

  hideSidebar() {
    this.props.action.setVisible(false)
  }

  render() {
    return (
      <Drawer visible={this.props.visible} onHide={this.hideSidebar.bind(this)}>
        <div className="sidebar-container">
          <Header></Header>
          <Theme themes={this.props.themes} onItemClick={this.hideSidebar.bind(this)}></Theme>
        </div>
      </Drawer>
    )
  }
}

export default connect(
  (state) => {
    return {
      ...state.sidebar
    }
  },
  (dispatch) => {
    return {
      action: bindActionCreators(actions, dispatch)
    }
  }

)(Sidebar)
