<template>
  <div>
    <div class="showbar">
      <div class="cover-image"></div>
      <div class="text" style="text-shadow:1px 1px 1px #000;">
        <h1>简书</h1>
        <h3>交流故事，沟通想法</h3>
        <p>一个基于内容分享的社区</p>
        <a href="#"><i class="fa fa-home"></i>提笔写篇文章</a>
      </div>
    </div>
    <div class="article-page">
      <nav>
        <span class="nav-text fir"><a href="#">发现</a></span>
        <span class="nav-text">
          <router-link to="./bonus">
            2015精选
          </router-link>
        </span>
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
          <div v-for="(item, index) in article" v-show="show === item.name" :key="index">
            <ul>
              <li v-for="(list, index) in item.msg" class="list" :key="index">
                <p class="list-top">
                  <a href="#" class="author"><span>{{list.author}}</span></a>
                  <span class="time">- {{list.time}}</span>
                </p>
                <h2 class="title">
                  <a href="#">{{list.title}}</a>
                </h2>
                <span class="small-text">阅读 {{list.read}} - </span>
                <span class="small-text">评论 {{list.comment}} - </span>
                <span class="small-text">喜欢 {{list.like}} - </span>
                <span class="small-text">打赏 {{list.pay}}</span>
                <span class="image" :style="{'backgroundImage': list.src}"></span>
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
        let url = '/static/testJson/homeTips.json'
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
        let url = '/static/testJson/homeArticle.json'
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

