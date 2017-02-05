import React, { Component } from 'react'
import './index.less'



export default class loading extends Component {

  constructor(props) {
    super(props)

    this.state = {
      style: {
        color: '#00A1ee',
        fontSize: 50
      }
    }
  }

  render() {
    const style = Object.assign({}, this.state.style, this.props.style || {})
    return (
      <i className="icon icon-spinner icon-spin zh-loading" style={style}></i>
    )
  }
}

