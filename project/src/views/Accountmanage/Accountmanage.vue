<template>
    <div class="account-manage">

        <el-card class="box-card">
            <!-- 卡片头部 -->
            <div slot="header" class="clearfix">
                <span>账号管理</span>
            </div>
            <!-- 卡片内容 -->
            <div class="text item">
               <!-- 表格数据 -->
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>

                    <el-table-column prop="userName" label="用户名">
                    </el-table-column>

                    <el-table-column prop="userGroup" label="用户组" show-overflow-tooltip>
                    </el-table-column>

                     <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            type="primary"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 分页 -->
                <el-row>
                    <el-col :span="14">  
                        <el-button type="danger">批量删除</el-button>
                    </el-col>
                    <el-col :span="10">
                        <el-pagination
                        background
                        :page-size="6"
                        current-page
                        layout="prev, pager, next"
                        :total="100">
                        </el-pagination>
                    </el-col>
                </el-row>               
            </div>
        </el-card>

    </div>
</template>

<script>
export default {
     data() {
      return {
        tableData: [
        {
          userName: 'admin',
          userGroup: '超级管理员'
        },
        {
          userName: 'zhangsan',
          userGroup: '普通用户'
        }],
        multipleSelection: []
      }
    },
     methods: {
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },

            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
    }
}
</script>

<style lang="less">
    @import './Accountmanage.less';
</style>