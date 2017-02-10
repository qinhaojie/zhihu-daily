import React, {Component} from 'react'
import {render, unstable_renderSubtreeIntoContainer} from  'react-dom'

export default class Portal extends Component {
  
  componentDidMount() {
    
    this.renderPortal(this.props)
  }
  componentWillUnmount() {
    this.removePortal()
  }
  // 此处很关键，否则portal的子组件状态变化了无法更新，因为render反方总是返回null。
  componentWillReceiveProps(nextProps) {
    this.renderPortal(nextProps)
  }

  renderPortal(props) {
    if (!this.container) {
      this.container = document.createElement('div')
      document.body.appendChild(this.container)
    }
    let children = props.children
    unstable_renderSubtreeIntoContainer(this, children, this.container)
  }


  removePortal() {
    document.body.removeChild(this.container)
  }

  render() {
    return null
  }
}