import React, { Component } from 'react'
import './article.less'

export default class Article extends Component {
  render() {
    const img = this.props.images ? <img src={this.props.images[0]}/> : null
    return (
      <div className='article'>
        <h3>{this.props.title}</h3>
        {img}
      </div>
    )
  }
}