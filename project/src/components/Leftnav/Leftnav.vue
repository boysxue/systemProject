<template>
    <div class="leftnav">
        <el-col :span="24">
            <h1>华联超市管理系统</h1>
            <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            router>
                <el-submenu :index="(index + 1)+''" v-for="(navdata ,index) in navData" :key='index'>
                    <template slot="title">
                    <span class="icon iconfont" v-html="navdata.code"></span>
                    <span>{{ navdata.navTitle }}</span>
                    </template>
                    
                    <el-menu-item :index="smallnav.path" v-for="(smallnav ,index) in navdata.children" :key="index">
                        {{ smallnav.smallTitle }}
                    </el-menu-item>
                    <!-- <el-menu-item index="/index/goodsadd">添加商品</el-menu-item> -->
                </el-submenu>
            </el-menu>
        </el-col>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 导航数据
            navData:[
                {
                    code:'&#xe632;',
                    navTitle:'商品管理',
                    children:[
                        {
                            path:'/index/goodsmanage',
                            smallTitle:'商品管理'
                        },
                        {
                            path:'/index/goodsadd',
                            smallTitle:'添加商品'
                        }
                    ]
                },

                {
                    code:'&#xe6b9;',
                    navTitle:'进货管理',
                    children:[
                        {
                            path:'/index/inventorymanage',
                            smallTitle:'库存管理'
                        },
                        {
                            path:'/index/inventoryadd',
                            smallTitle:'添加库存'
                        }
                    ]
                },

                {
                    code:'&#xe6c0;',
                    navTitle:'出货管理',
                    children:[
                        {
                            path:'/index/saleslist',
                            smallTitle:'销售列表'
                        },
                        {
                            path:'/index/goodsout',
                            smallTitle:'商品出库'
                        },
                        {
                            path:'/index/goodsreturn',
                            smallTitle:'商品退货'
                        }
                    ]
                },

                {
                    code:'&#xe642;',
                    navTitle:'统计管理',
                    children:[
                        {
                            path:'/index/salesstatistics',
                            smallTitle:'销售统计'
                        },
                        {
                            path:'/index/incomingstatistics',
                            smallTitle:'进货统计'
                        }
                    ]
                },

                {
                    code:'&#xe6da;',
                    navTitle:'账号管理',
                    children:[
                        {
                            path:'/index/accountmanage',
                            smallTitle:'账号管理'
                        },
                        {
                            path:'/index/accountadd',
                            smallTitle:'添加账号'
                        },
                        {
                            path:'/index/pwdupdate',
                            smallTitle:'密码修改'
                        }
                    ]
                },

                {
                    code:'&#xe503;',
                    navTitle:'会员管理',
                    children:[
                        {
                            path:'/index/membermanage',
                            smallTitle:'会员管理'
                        },
                        {
                            path:'/index/memberadd',
                            smallTitle:'添加会员'
                        }
                    ]
                },

                {
                    code:'&#xe604;',
                    navTitle:'系统管理',
                    children:[
                        {
                            path:'/index',
                            smallTitle:'系统信息'
                        }
                    ]
                },
            ]
        }
    },
    methods: {
      
    }
}
</script>

<style lang="less">
    @import './Leftnav.less';
</style>