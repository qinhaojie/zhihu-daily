import React, { Component } from 'react'
import './item.less'
import moment from 'moment'
export default class CommentItem extends Component {
  render() {
    const {author, content, avatar, time, likes} = this.props
    
    return (
      <div className="comment-item">
        <img src={avatar} className="avatar"/>
        <section>
          <header>
            <span className="author">{author}</span>
            <span className="praise">
              <span className="icon icon-thumbs-up"></span>
              {likes}
            </span>
          </header>
          <div className="content">
            {content}
          </div>
        </section>
        <footer>
          {moment(time * 1000).format('MM-DD HH:mm')}
        </footer>
      </div>
    )
  }
}
