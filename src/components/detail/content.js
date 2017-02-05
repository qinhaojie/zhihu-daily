import React, { Component } from 'react'
import './content.less'
export default class Content extends Component {
  render() {
    return (
      <div>
        <div className="zh-content" dangerouslySetInnerHTML={{__html:this.props.body}}>
          
        </div>
      </div>
    )
  }
}