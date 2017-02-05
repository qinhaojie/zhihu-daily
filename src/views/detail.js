import React, { Component } from 'react'
import Content from '../components/detail/content'
import * as detailAction from './detailRedux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loading from '../components/loading'
import './detail.less'

class Detail extends Component {

  componentDidMount() {
    const id = this.props.params.id
    this.props.action.loadContent(id)
  }


  // componentDidUpdate() {
  //   console.log('update')
  // }

  render() {
    let {content, params} = this.props
    const children = content.id === Number(params.id) ?
      <Content {...this.props.content}></Content> : <div className="detail-loading"><Loading style={{fontSize: 36}}></Loading></div>
    return (
      <div className='detail-wrapper'>
        {children}
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
