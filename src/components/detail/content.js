import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import './content.less'
export default class Content extends Component {

  componentDidMount() {
    this.addHolderInfo()
  }

  addHolderInfo() {
    const { title, image_source } = this.props
    const placeHolder = this.refs.wrapper.querySelector('.img-place-holder')
    if (!placeHolder) return
    placeHolder.innerHTML = `
      <div class="img-container"></div>
      <div class="title">${title}</div>
      <span class="img-source">${image_source}</span>
    `
    const img = placeHolder.querySelector('.img-container')
    img.style.backgroundImage = `url(${this.props.image})`
  }

  render() {
    return (
      <div>
        <div ref="wrapper" className="zh-content" dangerouslySetInnerHTML={{__html:this.props.body}}>
          
        </div>
      </div>
    )
  }
}