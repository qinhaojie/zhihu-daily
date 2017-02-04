import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './home.less'

import * as homeAction from './homeRedux'
const homeReducer = homeAction.default

import ArticleList from '../components/home/articleList'
class Home extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.action.loadLatest()
  }

  render() {
    return (
      <div className='home-content'>
        <div className='hot-story-container'>展示</div>
        <h3>今日新闻</h3>
        <div className='story-container'>
          <ArticleList articles={this.props.stories}></ArticleList>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      ...state.home
    }
  },
  (dispatch) => {
    return {
      action: bindActionCreators(homeAction, dispatch)
    }
  }

)(Home)
