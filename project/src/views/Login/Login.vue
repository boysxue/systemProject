<template>
    <div class="login">
        <div class="login-center">
            <h2>
                <span class="icon iconfont icon-kehuguanlixitong"></span>
                欢迎登录华联超市管理系统
            </h2>
            <el-form 
            :model="loginform" 
            status-icon 
            :rules="rules" 
            ref="loginform" 
            label-width="100px" 
            class="demo-ruleForm">
                <!-- 账号 -->
                <el-form-item label="账号" prop="username">
                    <el-input type="text" v-model="loginform.username" autocomplete="off"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginform.password" autocomplete="off"></el-input>
                </el-form-item>
                <!-- 确认密码 -->
                <el-form-item label="确认密码" prop="checkpwd">
                    <el-input type="password" v-model="loginform.checkpwd"></el-input>
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginform')">登录</el-button>
                    <el-button @click="resetForm('loginform')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
     data() {
      //  密码验证
      var pwd = (rule, value, callback) => {
        var reg = /^[\w_-]{6,16}$/;
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (!reg.test(value)) {
          callback(new Error('密码输入不正确'));
        } else {
          if(this.loginform.checkpwd !== ''){
              this.$refs.loginform.validateField('checkpwd');
          }
          callback();
        }
      };
      //  确认密码验证
      var checkPass = (rule, value, callback) => {
        var reg = /^[\w_-]{6,16}$/;
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginform.password) {
          callback(new Error('两次输入密码不一致!'));
        } else if (!reg.test(value)){
          callback(new Error('密码输入不正确'));
        } else {
          callback();
        } 
      };
      return {
        //登录表单的数据
        loginform: {
          username: '',
          password: '',
          checkpwd: ''
        },
        rules: {
            //账号验证
            username:[
              { required: true, message: '请输入账号', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            // 密码验证
            password:[
              { required:true, validator: pwd, trigger: 'blur' }
            ],
            // 确认密码验证
            checkpwd:[
              { required:true, validator: checkPass, trigger: 'blur' }
            ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功');
            //获取账号和密码
            let param = {
              username:this.loginform.username,
              password:this.loginform.password
            }
            //跳转
            this.$router.push('/index')
          } else {
            alert('登录失败');
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
    @import url('./login.less');
</style>