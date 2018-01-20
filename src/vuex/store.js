import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  articles: {
    fir: {
      author: '徐丹妮',
      title: '我不是学霸，只是比你努力一点而已',
      time: '大约6小时之前',
      read: '8498',
      comment: '248',
      like: '2342',
      pay: '2',
      src: 'url(../../static/vue-demo-hot.jpg)'
    },
    sec: {
      author: '共央君',
      title: '爱美的女生们，六款超高性价比的变美神器你都有了吗？',
      time: '大约8小时之前',
      read: '2623',
      comment: '34',
      like: '191',
      pay: '2',
      src: 'url(../../static/vue-demo-hot_1.jpg)'
    },
    thi: {
      author: '姜肥东',
      title: '毕业9年，我才学懂的道理',
      time: '大约6天之前',
      read: '6498',
      comment: '38',
      like: '242',
      pay: '2',
      src: 'url(../../static/vue-demo-hot_2.jpg)'
    }
  },
  show: 'hot'
}

const mutations = {
  DISPLAY_ARTICLE (state, show) {
    const article = {
      hot: {
        fir: {
          author: '徐丹妮',
          title: '我不是学霸，只是比你努力一点而已',
          time: '大约6小时之前',
          read: '8498',
          comment: '248',
          like: '2342',
          pay: '2',
          src: 'url(../../static/vue-demo-hot.jpg)'
        },
        sec: {
          author: '共央君',
          title: '爱美的女生们，六款超高性价比的变美神器你都有了吗？',
          time: '大约8小时之前',
          read: '2623',
          comment: '34',
          like: '191',
          pay: '2',
          src: 'url(../../static/vue-demo-hot_1.jpg)'
        },
        thi: {
          author: '姜肥东',
          title: '毕业9年，我才学懂的道理',
          time: '大约6天之前',
          read: '6498',
          comment: '38',
          like: '242',
          pay: '2',
          src: 'url(../../static/vue-demo-hot_2.jpg)'
        }
      },
      new: {
        fir: {
          author: '阿俊',
          title: 'Learn by doing',
          time: '大约6小时之前',
          read: '3398',
          comment: '258',
          like: '232',
          pay: '88',
          src: 'url(../../static/vue-demo-new.jpg)'
        },
        sec: {
          author: '阿猫',
          title: 'Learn by doing',
          time: '大约6小时之前',
          read: '3398',
          comment: '258',
          like: '232',
          pay: '88',
          src: 'url(../../static/vue-demo-new.jpg)'
        },
        thi: {
          author: '阿狗',
          title: 'Learn by doing',
          time: '大约6小时之前',
          read: '3398',
          comment: '258',
          like: '232',
          pay: '88',
          src: 'url(../../static/vue-demo-new.jpg)'
        }
      },
      daily: {
        fir: {
          author: '尸叔',
          title: '如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
          time: '大约2小时之前',
          read: '3750',
          comment: '70',
          like: '190',
          pay: '0',
          src: '../../static/vue-demo-daily.jpg'
        },
        sec: {
          author: '尸爸',
          title: '如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
          time: '大约2小时之前',
          read: '3750',
          comment: '70',
          like: '190',
          pay: '0',
          src: '../../static/vue-demo-daily.jpg'
        },
        thi: {
          author: '尸姐',
          title: '如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
          time: '大约2小时之前',
          read: '3750',
          comment: '70',
          like: '190',
          pay: '0',
          src: '../../static/vue-demo-daily.jpg'
        }
      }
    }
    state.show = show
    state.articles = article[show]
  }
}

export default new Vuex.Store({
  state,
  mutations
})
