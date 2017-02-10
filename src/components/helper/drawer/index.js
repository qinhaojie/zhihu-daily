import React from 'react'
import Portal from '../portal'
import './index.less'
import classnames from 'classnames'
export default class Drawer extends React.Component {

  constructor(prop) {
    super(prop)
    this.state = {
      visible: true
    }
  }

  onOverlayClick(e) {
    if (this.props.autoHide) {
      this.hide()
    }
  }

  hide() {
    this.setState({
      visible: false
    })
  }

  show() {
    this.setState({
      visible: true
    })
  }

  render() {
    const { visible } = this.state
    const overlayClass = classnames('overlay', {'overlay--active': visible})
    const drawerClass = classnames('drawer', {'drawer--active': visible})
    return (
      <Portal>
        <div>
          <div className={overlayClass} onClick={this.onOverlayClick.bind(this)}> </div>
          <div className={drawerClass}>
            {this.props.children}
          </div>
        </div>
      </Portal>
    )
  }
}

Drawer.defaultProps = {
  onHide: () => {},
  onShow: () => {},
  autoHide: true
}
