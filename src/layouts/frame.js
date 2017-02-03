import React, { Component} from 'react'
import Header from './header'
export default class Frame extends Component {
  render() {
    return (
      <div>
        <section>
          <Header></Header>
        </section>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}