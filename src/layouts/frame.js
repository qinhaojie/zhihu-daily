import React, { Component} from 'react'
import Header from '../views/header'
import Sidebar from '../views/sidebar'
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
        <Sidebar></Sidebar>
      </div>
    )
  }
}