import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div>
        <div className="content" dangerouslySetInnerHTML={{__html:this.props.body}}>
          
        </div>
      </div>
    )
  }
}