import React, { Component } from 'react'
import { Link } from 'react-router'
import Article from './article'
export default class ArticleList extends Component {
  render() {
    const children = this.props.articles.map((article) => {
      return (
        <Link to={`/detail/${article.id}`} key={article.id}>
          <Article {...article}></Article>
        </Link>
      )
    })
    return (
      <div className='article-list'>
        {children}
      </div>
    )
  }
}