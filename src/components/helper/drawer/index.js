import React from 'react'
import Portal from '../portal'
import './index.less'
import classnames from 'classnames'
export default class Drawer extends React.Component {

  constructor(prop) {
    super(prop)
    this.onOverlayTransitionend = this.onOverlayTransitionend.bind(this)
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

  onOverlayTransitionend(e) {
    if (!this.props.visible) {
      e.target.style.display = 'none'
    }
  }

  componentDidMount() {
    this.refs.overlay.addEventListener('transitionend', this.onOverlayTransitionend)
  }

  componentWillUnmount() {
    this.setBodyScrollable(false)
    this.refs.overlay.removeEventListener('transitionend', this.onOverlayTransitionend)
  }

  render() {
    const { visible } = this.props
    this.setBodyScrollable(visible)
    if (visible) {
      this.refs.overlay.style.display = 'block'
      this.refs.overlay.clientHeight
    }
    const overlayClass = classnames('overlay', {'overlay--active': visible})
    const drawerClass = classnames('drawer', {'drawer--active': visible})
    return (
      <Portal>
        <div>
          <div className={overlayClass} ref="overlay" onClick={this.onOverlayClick.bind(this)}> </div>
          <div className={drawerClass} onTouchMove={(e) => {console.log('move');e.stopPropagation()}}>
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
