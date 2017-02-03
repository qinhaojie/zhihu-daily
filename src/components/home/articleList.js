import React, { Component } from 'react'

import Article from './article'
export default class ArticleList extends Component {
  render() {
    const children = this.props.articles.map((article, i) => {
      return (
        <Article {...article} key={i}></Article>
      )
    })
    return (
      <div className='article-list'>
        {children}
      </div>
    )
  }
}