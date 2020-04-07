import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import detail from '@/components/detail'
import index from '@/components/index'
// 二级路由
import rec from '@/components/rec'
import hot from '@/components/hot'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      component:index,
      children:[
        {
          path:'rec',
          component:rec
        },
        {
          path:'hot',
          component:hot
        },
        {
          path:'search',
          component:search
        },
      ]
    },
    {
      path:'/detail',
      component:detail
    },
    {
      path:'*',
      redirect:'/index/rec'
    }
  ]
})
