import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/demo/HelloWorld'
import HelloFromVux from '@/components/demo/HelloFromVux'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    meta: {
      index: 0,
      title: '我是helloword'
    },
    component: HelloWorld
  }, {
    path: '/HelloFromVux/:id',
    name: 'HelloFromVux',
    meta: {
      index: 1,
      title: '我是小站'
    },
    component: HelloFromVux
  }]
})
