import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/utils/vant-ui'
import ArticleItem from '@/components/ArticleItem'

Vue.component('ArticleItem', ArticleItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
