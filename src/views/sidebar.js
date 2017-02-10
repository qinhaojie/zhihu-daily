import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Drawer from '../components/helper/drawer'
import Theme from '../components/sidebar/theme'
import './sidebar.less'
class Sidebar extends Component {

  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
   
  }


  render() {
    return (
      <Drawer>
        <div className="sidebar-container">
          title
          <Theme></Theme>
        </div>
      </Drawer>
    )
  }
}

export default connect(
  // (state) => {
  //   return {
  //     ...state.home
  //   }
  // },
  // (dispatch) => {
  //   return {
  //     action: bindActionCreators(homeAction, dispatch)
  //   }
  // }

)(Sidebar)
