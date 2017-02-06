import React, { Component } from 'react'
import './topStory.less'

export default class TopStroy extends Component {
  render() {
    return (
      <div className={`top-story-container ${this.props.className}`}>
        <div className="img-container" style={{
          backgroundImage: `url(${this.props.image})`
        }}></div>
        <div className="title">{this.props.title}</div>
      </div>
    )
  }
}