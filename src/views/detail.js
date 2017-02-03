import React, { Component } from 'react'
export default class Detail extends Component {
  render() {
    let a = this.props.params.id
    return (
      <div>
        {a}
      </div>
    )
  }
}