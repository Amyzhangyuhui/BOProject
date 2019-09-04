import Vue from 'vue'
import Router from 'vue-router'

import layoutTest from '@/views/layoutTest.vue'

import dynamicSetLine from '@/views/echart/line/dynamicSetLine.vue'
import dynamicSetBar from '@/views/echart/bar/dynamicSetBar.vue'
import dynamicSetPie from '@/views/echart/pie/dynamicSetPie.vue'
import dynamicSetScatter from '@/views/echart/scatter/dynamicSetScatter.vue'
import dynamicHandsontable from '@/views/Handsontable/dynamicHandsontable.vue'
import Handsontable        from '@/views/Handsontable/Handsontable.vue'
import BObjectEditor from '@/views/Handsontable/BObjectEditor.vue'
import searchEditTest from '@/views/Handsontable/searchEditTest.vue'
import ElementFreeEditor from '@/views/Handsontable/ElementFreeEditor.vue'
import freeForm from '@/views/Handsontable/freeForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        redirect: '/layoutTest',
    },
    {
        path: '/layoutTest',
        name: 'layoutTest',
        component: layoutTest
    },
    {
      path: '/dynamicSetLine',
      name: 'dynamicSetLine',
      component: dynamicSetLine
    },

    {
      path: '/dynamicSetBar',
      name: 'dynamicSetBar',
      component: dynamicSetBar
    },

    {
      path: '/dynamicSetPie',
      name: 'dynamicSetPie',
      component: dynamicSetPie
    },

    {
      path: '/dynamicSetScatter',
      name: 'dynamicSetScatter',
      component: dynamicSetScatter
    },
    {
      path: '/dynamicHandsontable',
      name: 'dynamicHandsontable',
      component: dynamicHandsontable
    },
    {
      path: '/Handsontable',
      name: 'Handsontable',
      component: Handsontable
    },
    {
      path: '/BObjectEditor',
      name: 'BObjectEditor',
      component: BObjectEditor
    },
    {
      path: '/searchEditTest',
      name: 'searchEditTest',
      component: searchEditTest
    },
    {
      path:'/ElementFreeEditor',
      name:'ElementFreeEditor',
      component:ElementFreeEditor
    },
    {
      path:'/freeForm',
      name:'freeForm',
      component:freeForm
    }
  ],
})

