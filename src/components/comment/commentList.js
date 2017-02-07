import React, { Component } from 'react'
import CommentItem from './commentItem'
export default class CommentList extends Component {
  render() {
    const children = this.props.comments.map(comment => {
      return <CommentItem {...comment} key={comment.id}></CommentItem>
    })
    return (
      <div className="comment-list">
        {children}
      </div>
    )
  }
}

