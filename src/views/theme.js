import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './theme.less'
class Theme extends Component {

  render() {
    return (
      <div>
        {this.props.params.id}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      ...state.theme,
      themes: state.sidebar.themes
    }
  },
  // (dispatch) => {
  //   return {
  //     action: bindActionCreators(actions, dispatch)
  //   }
  // }

)(Theme)
