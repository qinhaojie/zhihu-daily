import React, { Component } from 'react'
export default class Home extends Component {
  render() {
    const p = Array(100).fill(0).map((d, i) => {
      return (
        <p>{i}</p>
      )
    })
    return (
      <div>
        {p}
      </div>
    )
  }
}