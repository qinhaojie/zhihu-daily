import React, { Component } from 'react'


export default class Article extends Component {
  render() {
    return (
      <div className='article'>
        <h3>{this.props.title}</h3>
        <img src={this.props.images[0]}/>
      </div>
    )
  }
}