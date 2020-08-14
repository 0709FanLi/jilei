import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PropsTest from '@/test/8/PropsTest'
import BeforeCreate from '@/test/9/BeforeCreate'
import KeepAlive from '@/test/10/KeepAlive'
import Tabs from '@/tabs/Tabs'
import IsComponent from '@/test/11/IsComponent'
import Click from '@/test/12/Click'
import Com_watch from '@/test/13/Com_watch'
import Slot from '@/test/14_slot/Slot';
import RouterTest from '@/test/15/Router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/routerTest',
      name: 'RouterTest',
      component: RouterTest,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/props',
      name: 'PropsTest',
      component: PropsTest,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/keepAlive',
      name: 'KeepAlive',
      component: KeepAlive,
      meta:{
        keepAlive:false
      }
    },
    {
      path: '/beforeCreate',
      name:'BeforeCreate',
      component: BeforeCreate
    },
    {
      path: '/tabs',
      name:'Tabs',
      component: Tabs
    },
    {
      path: '/isComponent',
      name: 'IsComponent',
      component: IsComponent
    },
    {
      path: '/click',
      name: 'IsComponent',
      component: Click
    },
    {
      path: '/Com_watch',
      name: 'Com_watch',
      component: Com_watch
    },
    {
      path: '/Slot',
      name: 'Slot',
      component: Slot
    }
  ]
})
