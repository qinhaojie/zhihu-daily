import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './comment.less'
import CommentList from '../components/comment/commentList'
import * as actions from './commentRedux'
class Comment extends Component {
  componentDidMount() {
    const id = this.props.params.id
    this.props.action.loadLongComments(id)
    this.props.action.loadShortComments(id)
  }
  render() {
    return (
      <div className="comment-wrapper">
        <div className="comment-count">
          {this.props.extra.long_comments}条长评
        </div>
        <CommentList comments={this.props.longComments}></CommentList>
        <div className="comment-count">
          {this.props.extra.short_comments}条短评
        </div>
        <CommentList comments={this.props.shortComments}></CommentList>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      ...state.comments,
      extra: state.detail.extra
    }
  },
  (dispatch) => {
    return {
      action: bindActionCreators(actions, dispatch)
    }
  }
)(Comment)
