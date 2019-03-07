<template>
    <div class="header">
        <el-row :gutter="20">
            <el-col :span="20">
                <i class="el-icon-menu"></i>
                欢迎登录
            </el-col>
            <el-col :span="4">
                <el-row>
                    <el-col :span='8'>
                        <!-- 头像 -->
                        <div class="photo">

                        </div>
                    </el-col>
                    <el-col :span='16'>
                        <!-- 下拉列表 -->
                        <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                        用户名<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="personcenter">个人中心</el-dropdown-item>
                        <el-dropdown-item command="logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>                              
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
     methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
}
</script>

<style lang="less">
    @import './Header.less';
</style>