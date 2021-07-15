import Vue from 'vue'
import Router from 'vue-router'

// 封装一个 _import, 便于splitChunks
const _import = require('./_import_' + process.env.NODE_ENV)

// 如果不需要splitChunks, 用同步组件
// const _import = require("./_import_development");

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: _import('index'),
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
