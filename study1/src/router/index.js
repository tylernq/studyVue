import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lee from '@/components/Lee'
import JiuGongGe from '@/components/JiuGongGe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/lee',
      name: 'Lee',
      component: Lee,
    },
    {
      path: '/jiugongge',
      name: 'JiuGongGe',
      component: JiuGongGe,
    }

  ]
})
