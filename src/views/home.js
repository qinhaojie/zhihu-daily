import React, { Component } from 'react'

import './home.less'

const data = {"date":"20170203","stories":[{"images":["http:\/\/pic1.zhimg.com\/fa086e284b1eaf88c76f4eab0d2d9abc.jpg"],"type":0,"id":9168133,"ga_prefix":"020318","title":"年度热门 · 自慰的真正危害有哪些？"},{"images":["http:\/\/pic2.zhimg.com\/21e18f8695c4c0a6d12a4c3bde4e5161.jpg"],"type":0,"id":9168081,"ga_prefix":"020317","title":"年度热门 · 为什么一些强行「接地气」的「神翻译」，让人无比尴尬？"},{"images":["http:\/\/pic4.zhimg.com\/46203fe785f860afdbffae281f90a137.jpg"],"type":0,"id":9168010,"ga_prefix":"020316","title":"年度热门 · 据说，他们是台湾演技最好的三个男人"},{"images":["http:\/\/pic2.zhimg.com\/4a4d47e6567ae4bcc8e6e31a2db62685.jpg"],"type":0,"id":9168012,"ga_prefix":"020315","title":"年度热门 · 有哪些鲜为人知的网络冷知识和技巧？"},{"images":["http:\/\/pic2.zhimg.com\/bfcd24913e4ee419805ac9c1f413666d.jpg"],"type":0,"id":9167920,"ga_prefix":"020314","title":"年度热门 · 用「泡学」把妹撩汉的他们，奔向了幸福的反面"},{"images":["http:\/\/pic1.zhimg.com\/c66ed747225108673b228d0a44aed300.jpg"],"type":0,"id":9167874,"ga_prefix":"020313","title":"年度热门 · 如果一个人裸体上街被强奸，是否需要承担一定的责任？"},{"images":["http:\/\/pic2.zhimg.com\/d0be452f91248f0c166e65f42dc4cdb5.jpg"],"type":0,"id":9169887,"ga_prefix":"020312","title":"年度大误 · 用反派 Boss 的视角看主角是一种怎样的体验？"},{"images":["http:\/\/pic4.zhimg.com\/be94f463aff6b1f404dfd98cadf62adb.jpg"],"type":0,"id":9167786,"ga_prefix":"020311","title":"年度热门 · 9 至 11 层是扬灰层，买房租房都得避开？"},{"images":["http:\/\/pic1.zhimg.com\/fee362f30fe8740e5b6cf7acb9b1d520.jpg"],"type":0,"id":9167731,"ga_prefix":"020310","title":"年度热门 · 公务员体检为什么要检查肛门？"},{"title":"年度热门 · 我养的宠物生宝宝了，不过是个比较特别的宠物……","ga_prefix":"020309","images":["http:\/\/pic2.zhimg.com\/2824c863479924a0d5ed6722f8c67ce1.jpg"],"multipic":true,"type":0,"id":9167675},{"images":["http:\/\/pic1.zhimg.com\/65dae64c9490c8bd82dbd52a51c1e8e8.jpg"],"type":0,"id":9167642,"ga_prefix":"020308","title":"年度热门 · 豪华酒店有哪些不易发现的免费服务？"},{"title":"年度热门 · 开启上帝视角，看看国家是怎么印钱的","ga_prefix":"020307","images":["http:\/\/pic1.zhimg.com\/589f11627258e55ff3f4872d43b1b0a4.jpg"],"multipic":true,"type":0,"id":9167518},{"images":["http:\/\/pic4.zhimg.com\/00c539fb4cf0a131b71f13fd10d19f03.jpg"],"type":0,"id":9167423,"ga_prefix":"020307","title":"年度热门 · 晚点 70 小时的体验：矿泉水 50 一瓶，方便面 100 一盒"},{"images":["http:\/\/pic3.zhimg.com\/72afe3101586d9d55996b22a28c1522e.jpg"],"type":0,"id":9167483,"ga_prefix":"020307","title":"年度热门 · 东京人口密度比北京还大，为什么还能一家一栋房？"},{"images":["http:\/\/pic1.zhimg.com\/401f44efbcaac79c34bf9010543607f8.jpg"],"type":0,"id":9191633,"ga_prefix":"020306","title":"年度瞎扯 · 全年最佳吐槽"}],"top_stories":[{"image":"http:\/\/pic2.zhimg.com\/d63ce5a9ee336c3f694bc46781830115.jpg","type":0,"id":9167731,"ga_prefix":"020310","title":"年度热门 · 公务员体检为什么要检查肛门？"},{"image":"http:\/\/pic3.zhimg.com\/78b8cc061910976c01bc76d9a11753be.jpg","type":0,"id":9167642,"ga_prefix":"020308","title":"年度热门 · 豪华酒店有哪些不易发现的免费服务？"},{"image":"http:\/\/pic3.zhimg.com\/2d901d877a47bffee531ef0dc863a026.jpg","type":0,"id":9167483,"ga_prefix":"020307","title":"年度热门 · 东京人口密度比北京还大，为什么还能一家一栋房？"},{"image":"http:\/\/pic1.zhimg.com\/0eb1822e7fab9ca130b1c02e7eb042ac.jpg","type":0,"id":9167670,"ga_prefix":"020209","title":"年度热门 · 真正的学区房有多贵？"},{"image":"http:\/\/pic3.zhimg.com\/30623b5d25c984610bb3837e0ccd2eea.jpg","type":0,"id":9167867,"ga_prefix":"020213","title":"年度热门 · 开始狂发朋友圈，后来学会了分组，最后就不怎么发了"}]}

import ArticleList from '../components/home/articleList'
export default class Home extends Component {

  render() {
    return (
      <div className='home-content'>
        <div className='hot-story-container'>展示</div>
        <h3>今日新闻</h3>
        <div className='story-container'>
          <ArticleList articles={data.stories}></ArticleList>
        </div>
      </div>
    )
  }
}