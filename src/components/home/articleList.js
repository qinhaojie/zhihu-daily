import React, { Component } from 'react'
import { Link } from 'react-router'
import Article from './article'
export default class ArticleList extends Component {
  render() {
    const children = this.props.articles.map((article) => {
      return (
        <Link to={`/detail/${article.id}`}>
          <Article {...article} key={article.id}></Article>
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