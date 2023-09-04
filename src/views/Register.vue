<template>
  <div class="register-page">
    <van-nav-bar title="注册"/>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名长度至少为5个字符' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码长度至少为6个字符' },
        ]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <router-link class="link" to="/login">已有账号，返回登录页</router-link>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
