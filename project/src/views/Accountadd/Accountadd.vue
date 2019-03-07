<template>
    <div class="accountadd">
        <el-card class="box-card">
            <!-- 卡片头部 -->
            <div slot="header" class="clearfix">
                <span>添加管理员账号</span>
            </div>
            <!-- 卡片内容 -->
            <div class="text item">
                <!-- 表单 -->
                <el-form :model="accountForm" status-icon :rules="rules" ref="accountForm" label-width="100px" class="demo-ruleForm" size="small" style="width:350px">
                    
                    <el-form-item label="用户名" prop="userName">
                        <el-input type="text" v-model="accountForm.userName" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="accountForm.password" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="accountForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="选择用户组" prop="userGroup">
                        <el-select v-model="accountForm.userGroup" placeholder="请选择用户组">
                        <el-option label="超级管理员" value="超级管理员"></el-option>
                        <el-option label="普通用户" value="普通用户"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('accountForm')">添加</el-button>
                        <el-button @click="resetForm('accountForm')">重置</el-button>
                    </el-form-item>
                </el-form>

            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        var reg = /^[\w_-]{6,16}$/;
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(!reg.test(value)){
          callback(new Error('密码格式不正确'));
        }else {
          if (this.accountForm.checkPass !== '') {
            this.$refs.accountForm.validateField('checkPass');
          }
          callback();
        }
      };
      var checkPwd = (rule, value, callback) => {
        var reg = /^[\w_-]{6,16}$/;
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if(!reg.test(value)){
          callback(new Error('密码格式不正确'));
        }else if (value !== this.accountForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        //   表单数据对象
        accountForm: {
          userName:'',
          password: '',
          checkPass: '',
          userGroup: ''
        },
        // 规则
        rules: {
          userName:[
              { required: true, message: '请输入用户名', trigger: 'blur'},
              { min: 3, max: 5, message: '用户名长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: checkPwd, trigger: 'blur' }
          ],
          userGroup: [
              { required: true, message: '请输入选择用户组', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
                showClose: true,
                message: '恭喜你，添加账户成功',
                type: 'success'
            });
            // 获取表单数据
            let accountArr = {
                userName: this.accountForm.userName,
                password: this.accountForm.password,
                userGroup: this.accountForm.userGroup
            }
            //跳转账号管理页面
            this.$router.push('/index/accountmanage');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="less">
    @import './Accountadd.less';
</style>