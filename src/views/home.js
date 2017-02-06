import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './home.less'

import * as homeAction from './homeRedux'
import Slider from 'react-slick'
import moment from 'moment'
import ArticleList from '../components/home/articleList'
import TopStory from '../components/home/topStory'
import { Link } from 'react-router'
class Home extends Component {

  constructor(props) {
    super(props)
    this.isLoadingMore = false
    this.loadBeforeCount = 0
  }

  componentDidMount() {
    this.props.action.loadLatest()
  }

  getSlider() {
    if (this.props.topStories.length === 0) return null
    var settings = {
      dots: true,
      dotsClass: 'top-slider-dots',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000
    }
    const children = this.props.topStories.map(story => {
      return (
        <div key={story.id}>
          <Link to={`/detail/${story.id}`}>
            <TopStory {...story} className='top-story-holder'></TopStory>
          </Link>
        </div>
        )
    })
    return (
      <Slider {...settings}>
        {children}
      </Slider>
    )
  }

  loadMore() {
    if (this.isLoadingMore) return
    this.isLoadingMore = true
    const date = moment(this.props.date).subtract(this.loadBeforeCount, 'days')

    this.loadBeforeCount++
    let promise =this.props.action.loadBefore(date.format('YYYYMMDD'))
    promise.then(data => {
      console.log(data)
      this.isLoadingMore = false
    })
  }

  onTouchStart(e) {
   // console.log(e.touches[0])
  }

  onTouchEnd(e) {
    if (document.body.scrollTop + document.body.clientHeight > document.body.scrollHeight - 100) {
      this.loadMore()
    }
  }

  onTouchMove(e) {
   // console.log(e.touches[0])
  }

  render() {
    return (
      <div className='home-content' 
        onTouchStart={this.onTouchStart.bind(this)}
        onTouchEnd={this.onTouchEnd.bind(this)}
        onTouchMove={this.onTouchMove.bind(this)}>
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
