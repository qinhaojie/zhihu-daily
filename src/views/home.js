import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './home.less'

import * as homeAction from './homeRedux'
import Slider from 'react-slick'
import moment from 'moment'
import ArticleWrapper from '../components/home/articleWrapper'
import TopStory from '../components/home/topStory'
import { Link } from 'react-router'
import Loading from '../components/loading'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoadingMore: false
    }
    this.loadBeforeCount = 0
  }

  componentDidMount() {
    console.log('mount')
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
    if (this.state.isLoadingMore) return
    this.setState({
      isLoadingMore: true
    })
    const date = moment(this.props.date).subtract(this.loadBeforeCount, 'days')

    this.loadBeforeCount++
    let promise = this.props.action.loadBefore(date.format('YYYYMMDD'))
    promise.then(data => {
      console.log(data)
      this.setState({
        isLoadingMore: false
      })
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


  getArticle() {
    return this.props.stories.map((story, i) => {
      return (
        <ArticleWrapper {...story} key={i}></ArticleWrapper>
      )
    })
  }
  
  componentWillReceiveProps() {
    console.log('receive')
  }

  componentWillUpdate() {
    console.log('willup')
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
        {this.getArticle()}
        {true || this.state.isLoadingMore
          ? (<div className='load-more-loading'>
              <Loading style={{fontSize: 20}}></Loading>
            </div>)
          : null }
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
