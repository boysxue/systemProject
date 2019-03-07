<template>
    <div class="index">
        <el-container>
            <el-aside width="200px">
                <!-- 左侧导航子组件 -->
                <leftnav></leftnav>
            </el-aside>
            <!-- 右侧 -->
            <el-container>
                <!-- 头部 -->
                <el-header>
                    <myheader></myheader>
                </el-header>
                <!-- 中间部分 -->
                <el-main> 
                    <!-- 路由出口 -->
                    <router-view></router-view>
                </el-main>
                <!-- 尾部 -->
                <el-footer>
                    <myfooter></myfooter>
                </el-footer>
            </el-container>
        </el-container>
       
    </div>
</template>

<script>
// 引入子组件
import leftnav from '@/components/Leftnav/Leftnav.vue';
import myfooter from '@/components/Footer/Footer.vue';
import myheader from '@/components/Header/Header.vue'

export default {
    // 注册组件
    components:{
        leftnav,
        myfooter,
        myheader
    }
}
</script>

<style lang="less">
    @import './Index.less';
</style>