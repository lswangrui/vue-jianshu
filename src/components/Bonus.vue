<template>
  <div class="bonus-container">
    <div class="bonus-header">
      <span class="yellow">&nbsp;&nbsp;简书2015</span>
      <i>&nbsp;·&nbsp;</i>
      <span>每月一篇好文章&nbsp;&nbsp;</span>
    </div>
    <div class="share">
      <span><a href="#"><i class="fa fa-mobile"></i>手机查看效果更佳</a></span>
      <span><a href="#"><i class="fa fa-weibo"></i>分享到微博</a></span>
      <span><a href="#"><i class="fa fa-wechat"></i>分享到微信</a></span>
      <span><a href="#">更多分享</a></span>
    </div>
    <ul class="text-list">
      <li v-for="(article, index) in articles" :key="index" :style="{ background:
      article.bg, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundColor: '#fff'}">
        <div class="content">
          <a href="#" class="mask">
            <div class="button">阅读全文</div>
          </a>
          <div class="bonus-text">
            <div class="bonus-text-title">{{article.title}}</div>
            <div class="line"></div>
            <div class="bonus-text-content">
              {{article.content_1}}<br>
							{{article.content_2}}<br>
							{{article.content_3}}<br>
							{{article.content_4}}<br>
							{{article.content_5}}<br>
							{{article.content_6}}<br>
            </div>
          </div>
          <div class="author"></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
  .bonus-container{
		position: absolute;
		top: 0;
		width: calc(100% - 200px);
		z-index: 5;
		background-color: #f3f3f3;
		height: 200%;
	}
  .text-list {
    width: 1110px;
    margin: 20px auto;
  }
    .text-list li {
    position: relative;
    display: inline-block;
    margin: 10px;
    box-shadow: 5px 5px 10px #d5d5d5;
  }
  .mask, .text-list li {
    width: 342px;
    height: 660px;
  }
  .mask, .text-list li {
    width: 342px;
    height: 660px;
  }

	@media screen and (max-width: 1300px){
		.bonus-container{
			width: 1110px;
			transform: translateX(-130px);
		}
	}
	@media screen and (max-width: 1600px){

		.rightbar{
			width: 0;
		}
		.rightbar nav{
			width: 100px;
			height: 100px;
			right: 100%;
			position: absolute;
		}
	}
	.bonus-header i{
		font-size: 36px;
	}
	.bonus-header:before{
		display: inline-block;
		content: '';
		position: relative;
		top: -12px;
		width: 50px;
		height: 2px;
		background-color: #d5d5d5;
	}
	.bonus-header:after{
		display: inline-block;
		content: '';
		position: relative;
		top: -12px;
		width: 50px;
		height: 2px;
		background-color: #d5d5d5;
	}
	.line{
		position: relative;
		display: inline-block;
		top: 10px;
		width: 50px;
		height: 2px;
		background-color: #d5d5d5;
	}
	.bonus-header{
		width: 600px;
		margin: 30px auto;
	}
	.share:before{
		display: inline-block;
		width: 80px;
		content: '';
	}
	.share span{
		padding: 0 5px;
	}
	.share span a{
		color: #555555;
	}
	.share{
		width: 600px;
		margin: 0 auto;
	}
	.bonus-header span{
		font-size: 36px;
	}
	.yellow{
		color: #FB7F6E;
	}
	.text-list{
		width: 1110px;
		margin: 20px auto;
	}
	.text-list li{
		position: relative;
		display: inline-block;
		width: 342px;
		height: 660px;
		margin: 10px 10px;
		box-shadow: 5px 5px 10px #d5d5d5;
	}
	.mask{
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 16;
		background-color: #efefef;
		width: 342px;
		height: 660px;
		color: #fff;
	}
	.mask:hover{
		opacity: 0.8;
	}
	.button{
		margin: 300px auto;
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 5px;
		background-color: #F5674C;
	}
	.bonus-text{
		text-align: center;
		margin-top: 280px;
	}
	.bonus-text-title{
		font-size: 14px;
		font-weight: bold;
	}
	.bonus-text-content{
		line-height: 20px;
		margin-top: 30px;
		font-size: 12px;
	}
	.mint-popup{
		top: 10px;
		left: 10px;
	}
</style>
<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        articles: ''
      }
    },
    mounted () {
      this.getArticle()
    },
    methods: {
      getArticle () {
        let self = this
        let url = '/static/testJson/bonusArticle.json'
        axios.get(url, {
        })
        .then(function (response) {
          self.articles = response.data.results
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>



