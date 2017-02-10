import React from 'react'
import Portal from '../portal'
import './index.less'
import classnames from 'classnames'
export default class Drawer extends React.Component {

  constructor(prop) {
    super(prop)
  }

  onOverlayClick(e) {
    this.props.onHide()
  }


  setBodyScrollable(visible) {
    if (!visible) {
      document.documentElement.classList.remove('drawer--open')
    } else {
      document.documentElement.classList.add('drawer--open')
    }
  }

  componentWillUnmount() {
    this.setBodyScrollable(false)
  }

  render() {
    const { visible } = this.props
    this.setBodyScrollable(visible)
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
  visible: false
}
