<template>
  <div class="login">
    <form>
      <h1>云资源管理平台</h1>
      <ul>
        <li>
          <span>帐号</span>
          <input type="text" v-model="account">
        </li>
        <li>
          <span>密码</span>
          <input type="password" v-model="password">
        </li>
        <li>
          <button @click="login">登陆</button>
        </li>
      </ul>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      account: "zhangsan",
      password: "123456798"
    };
  },
  methods: {
    login: function() {
      if (this.account && this.password) {
        sessionStorage.setItem("isLogin", true);
        this.$router.push("/cloudReasource");
      }
    }
  }
};
</script>
<style scoped>
.login {
  min-width: 500px;
  min-height: 950px;
  background: url("../assets/cloudLogins.png") 100% 100% no-repeat;
  background-size: cover;
  margin: -50px 0 0 0;
}
.login form {
  width: 450px;
  height: 400px;
  background-color: #5ca5df;
  position: absolute;
  right: 100px;
  top: 50%;
  margin-top: -200px;
  border-radius: 8px;
}
.login form h1 {
  text-align: center;
  color: #fff;
  margin: 50px auto;
}
.login form ul {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
}
.login form ul li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin-top: 35px;
}
.login form ul li input {
  width: 240px;
  height: 100%;
  padding-left: 10px;
  margin-left: 15px;
}
.login form ul li button {
  width: 255px;
  height: 100%;
  margin-left: 52px;
  border: none;
  font-size: 18px;
}
</style>
