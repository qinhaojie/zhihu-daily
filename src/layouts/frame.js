import React, { Component} from 'react'
import Header from '../views/header'
export default class Frame extends Component {
  render() {
    return (
      <div>
        <section>
          <Header {...this.props}></Header>
        </section>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}