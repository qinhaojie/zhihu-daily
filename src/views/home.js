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
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    this.props.action.loadLatest()
    const scrollTop = window.sessionStorage.getItem('homeScroll')
    if (scrollTop) {
      document.getElementById('root').scrollTop = scrollTop
    }
    document.getElementById('root').addEventListener('scroll', this.onScroll)
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
          <Link to={'/detail/' + story.id}>
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
    if (this.state.isLoadingMore || !this.props.date) return
    this.setState({
      isLoadingMore: true
    })
    const date = moment(this.props.date).subtract(this.loadBeforeCount, 'days')

    this.loadBeforeCount++
    let promise = this.props.action.loadBefore(date.format('YYYYMMDD'))
    promise.then(data => {
      this.setState({
        isLoadingMore: false
      })
    })
  }

  onScroll(e) {
    if (e.target.scrollTop + e.target.clientHeight > e.target.scrollHeight - 100) {
      this.loadMore()
    }
  }
  componentWillUnmount() {
    document.getElementById('root').removeEventListener('scroll', this.onScroll)
    window.sessionStorage.setItem('homeScroll', document.getElementById('root').scrollTop)
  }

  getArticle() {
    return this.props.stories.map((story, i) => {
      return (
        <ArticleWrapper {...story} key={i}></ArticleWrapper>
      )
    })
  }

  render() {
    return (
      <div className='home-content'>
        <div className='hot-story-container'>
          {this.getSlider()}
        </div>
        {this.getArticle()}
        {true ||this.state.isLoadingMore
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
