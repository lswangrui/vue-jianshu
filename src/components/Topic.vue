<template>
  <div>
    <div class="showbar">
      <div class="cover-image_2"></div>
      <div class="text" style="text-shadow:1px 1px 1px #000;">
        <h1>专题</h1>
        <h3>让思想汇聚，流传</h3>
        <p :style="{fontSize:'14px',marginBottom:'5px'}">专题内容由多位写作者提供</p>
        <a href="#"><i class="fa fa-pencil"></i>&nbsp;&nbsp;新建专题</a>
      </div>
    </div>
    <div class="article-page">
      <nav>
        <span class="search clearfloat">
          <span class="input">
            <input type="search" placeholder="搜索">
          </span>
          <span class="search-icon"><i class="fa fa-search"></i></span>
        </span>
      </nav>
      <div class="article-list clearfix">
        <ul class="btn-group">
          <li v-for="(item, index) in tips" :class="{active: show === item.name}" :key="index">
            <a @click="displayArticle(item.name)">{{item.text}}</a>
            <!-- <router-link @click="show = 'hot'" to="./hot">热门</router-link> -->
          </li>
        </ul>
        <ul>
          <div class="topic_article_container" v-for="(item, index) in article" v-show="show === item.name" :key="index">
            <div class="sequence-nav" v-if="show === 'recommend'">
              <a @click="sortContent('time'), change = 'new'" :class="{isactive: change === 'new'}">
                最近更新
              </a>
              <a @click="change = 'hot'" :class="{isactive: change === 'hot'}">
                热门排序
              </a>
              <a @click="sortContent('concern'), change = 'concern'" :class="{isactive: change === 'concern'}">
                关注度排序
              </a>
            </div>
            <ul>
              <li v-for="(list, index) in item.msg" class="list" :key="index">
                <a href="" class="topic_article_img">
                  <img :src="list.img">
                </a>
                <div class="topic_content">
                  <h5>{{list.title}}</h5>
                  <p>{{list.par}}</p>
                  <div class="topic_button">
                    <a href="#">
                      <i class="fa fa-fw fa-plus"></i>
                      <span>添加关注</span>
                    </a>
                  </div>
                  <p>
                    <a href="#" style="color:#4094c7">
                      {{list.number}}篇文章
                    </a>
                    &nbsp;&nbsp;·&nbsp;&nbsp;{{list.concern}}k人关注
                    <span class="topic_tag">
                      <i class="fa fa-tags"></i>
                      {{list.keys}}
                    </span>
                  </p>
                </div>
                <!-- <span class="image" :style="{'backgroundImage': list.src}"></span> -->
              </li>
            </ul>
          </div>
          <li></li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style>

  .btn-group{
    /* text-align: left; */
    margin-left: 15px;
    margin-top: 20px;
  }
  .btn-group li {
    margin: 0 5px;
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    cursor: pointer;
  }
  .btn-group .active {
    background-color: #de533a;
  }
  .btn-group .active a {
    color: #fff;
  }
  .showArt{
    display: block;
  }
  .list{
    margin-left: 30px;
    margin-top: 17px;
   	margin-bottom: 17px;
   	padding-bottom: 17px;
   	width: calc(100% - 30px);
    border-bottom:1px dashed #efefef;
		border-bottom: 1px dashed #d9d9d9;
	}
  .list .author {
    color: #4094c7;
  }
  .list .time {
    font-size: 12px;
    color: #717171;
  }
  .list .title a {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }
  .list .small-text {
    font-size: 12px;
    color: #717171;
  }
  .list .image {
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100px;
    height: 100px;
    float: right;
    margin-top: -74px;
    background-repeat: no-repeat;
    background-size: 100%;
  }
	.list-top{
		padding-top: 10px;
		text-align: left;
	}
	.small-text-group {
		text-align: left;
	}
	.list .title {
		text-align: left;
	}
	.list .title a{
		margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0;
    display: inherit;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
	}

  .showbar .cover-image_2 {
    position: absolute;
    top: 0;
    left: 0;
    background: url('/static/img/vue-demo-bg2.jpg');
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    z-index: -1;
  }

  .topic_article_img {
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .topic_article_img img {
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .topic_content {
      position: relative;
      margin-left: 55px;
  }
  .topic_content h5, .topic_content p {
      margin-bottom: 3px;
  }
  .topic_content p {
      line-height: 20px;
      color: #999;
      font-size: 12px;
      padding-right: 120px;
  }
  .topic_button {
      position: absolute;
      right: 0;
      top: 50%;
      width: 80px;
      height: 20px;
      padding: 2px 10px;
      margin-top: -13px;
      border: 1px solid #49be38;
      border-radius: 50px;
      background-color: #49be38;
  }
  .topic_button a {
      display: block;
      line-height: 20px;
      width: 80px;
      color: #fff;
      text-align: center;
  }
  .topic_button span {
      margin-left: 3px;
      padding-left: 7px;
      border-left: 1px solid #fff;
  }
  .topic_tag {
      margin-left: 10px;
  }
  .topic_article_container {
      width: calc(100% - 35px);
      height: calc(100% - 180px);
      margin: 45px 0 0 35px;
  }
  .sequence-nav {
      margin-bottom: 10px;
      color: #999;
  }
  .sequence-nav .active {
      color: #000;
  }
</style>
<script>
  // import store from '@/vuex/store'
  // import { mapState } from 'vuex'
  import axios from 'axios'

  export default {
    data () {
      return {
        show: 'hot',
        tips: '',
        article: ''
      }
    },
    mounted () {
      this.getPosts()
      this.getArticle()
    },
    methods: {
      displayArticle: function (str) {
        this.$data.show = str
      },
      getPosts () {
        let self = this
        let url = '/static/testJson/topicTips.json'
        axios.get(url, {
        })
        .then(function (response) {
          self.tips = response.data.results
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      getArticle () {
        let self = this
        let url = '/static/testJson/topicArticle.json'
        axios.get(url, {
        })
        .then(function (response) {
          self.article = response.data.results
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

