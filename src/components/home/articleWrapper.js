import React, { Component } from 'react'
import './articleWrapper.less'
import ArticleList from './articleList'
import moment from 'moment'
moment.locale('zh-cn')
export default class ArticleWrapper extends Component {
  render() {
    return (
      <div className='article-wrapper'>
        <span>{moment(this.props.date).format('MMMMDo dddd')}</span>
        <div className='story-container'>
          <ArticleList articles={this.props.stories}></ArticleList>
        </div>
      </div>
    )
  }
}

function formatDate(string) {
  const date = new Date(string)
}