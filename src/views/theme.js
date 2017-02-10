import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TopStroy from '../components/home/topStory'
import ArtivalWrapper from '../components/home/articleWrapper'
import * as actions from './themeRedux'
import './theme.less'
class Theme extends Component {

  componentDidMount() {
    this.props.action.loadThemeInfo(this.props.params.id)
  }

  getEditors() {
    return this.props.editors.map((editor) => {
      return (
        <img src={editor.avatar} className="avatar" key={editor.id}/>
      )
    })
  }

  render() {
    const {image, description} = this.props
    return (
      <div className="theme-container">
        <TopStroy image={image} title={description} className="theme-top-container"></TopStroy>
        <div className="editor">
          <span className="text">主编</span>
          {this.getEditors()}
        </div>
        <div className="article-wrapper">
          <div className="story-container">
            <ArtivalWrapper stories={this.props.stories}></ArtivalWrapper>
          </div>
        </div>
      </div>
    )
  }
}




export default connect(
  (state) => {
    return {
      ...state.theme
    }
  },
  (dispatch) => {
    return {
      action: bindActionCreators(actions, dispatch)
    }
  }

)(Theme)
