import React, { Component } from 'react'
import Content from '../components/detail/content'
import * as detailAction from './detailRedux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class Detail extends Component {

  componentDidMount() {  
    const id = this.props.params.id
    this.props.action.loadContent(id)
  }

  componentWillReceiveProps(nextProps) {
    console.log(1)
   // const id = this.props.params.id
   // this.props.action.loadContent(id)
  }

  render() {
    return (
      <div>
        <Content {...this.props.content}></Content>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      content: state.detail.data
    }
  },
  (dispatch) => {
    return {
      action: bindActionCreators(detailAction, dispatch)
    }
  }
)(Detail)
