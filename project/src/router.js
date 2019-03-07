import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //登录
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login/Login.vue')
    },
    //后台首页父组件
    {
      path: '/index',
      component: () => import('./views/Index/Index.vue'),
      children:[
        //系统信息
        {
          path:'',
          name:'',
          component:()=>import('./views/Systeminfo/Systeminfo.vue')
        },
        //添加账号
        {
          path:'/index/accountadd',
          name:'accountadd',
          component:()=>import('./views/Accountadd/Accountadd.vue')
        },
        //账号管理
        {
          path:'/index/accountmanage',
          name:'accountmanage',
          component:()=>import('./views/Accountmanage/Accountmanage.vue')
        },
        //商品添加
        {
          path:'/index/goodsadd',
          name:'goodsadd',
          component:()=>import('./views/Goodsadd/Goodsadd.vue')
        },
        // 商品管理
        {
          path:'/index/goodsmanage',
          name:'goodsmanage',
          component:()=>import('./views/Goodsmanage/Goodsmanage.vue')
        },
        // 商品出库
        {
          path:'/index/goodsout',
          name:'goodsout',
          component:()=>import('./views/Goodsout/Goodsout.vue')
        },
        // 商品退货
        {
          path:'/index/goodsreturn',
          name:'goodsreturn',
          component:()=>import('./views/Goodsreturn/Goodsreturn.vue')
        },
        //进货统计
        {
          path:'/index/incomingstatistics',
          name:'incomingstatistics',
          component:()=>import('./views/Incomingstatistics/Incomingstatistics.vue')
        },
        //添加库存
        {
          path:'/index/inventoryadd',
          name:'inventoryadd',
          component:()=>import('./views/Inventoryadd/Inventoryadd.vue')
        },
        // 库存管理
        {
          path:'/index/inventorymanage',
          name:'inventorymanage',
          component:()=>import('./views/Inventorymanage/Inventorymanage.vue')
        },
        //添加会员
        {
          path:'/index/memberadd',
          name:'memberadd',
          component:()=>import('./views/Memberadd/Memberadd.vue')
        },
        //会员管理
        {
          path:'/index/membermanage',
          name:'membermanage',
          component:()=>import('./views/Membermanage/Membermanage.vue')
        },
        //修改密码
        {
          path:'/index/pwdupdate',
          name:'pwdupdate',
          component:()=>import('./views/Pwdupdate/Pwdupdate.vue')
        },
        //销售列表
        {
          path:'/index/saleslist',
          name:'saleslist',
          component:()=>import('./views/Saleslist/Saleslist.vue')
        },
        //销售统计
        {
          path:'/index/salesstatistics',
          name:'Salesstatistics',
          component:()=>import('./views/Salesstatistics/Salesstatistics.vue')
        },
      ]
    }
  ]
})
