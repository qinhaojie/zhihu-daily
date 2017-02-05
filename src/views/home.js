import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './home.less'

import * as homeAction from './homeRedux'
import Slider from 'react-slick'

import ArticleList from '../components/home/articleList'
class Home extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.action.loadLatest()
  }

  getSlider() {
    if (this.props.topStories.length === 0) return null
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
    const children = this.props.topStories.map(story => {
      return <img src={story.image} key={story.id}></img>
    })
    return (
      <Slider {...settings}>
        {children}
      </Slider>
    )
  }

  render() {
    return (
      <div className='home-content'>
        <div className='hot-story-container'>
          {this.getSlider()}
        </div>
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
