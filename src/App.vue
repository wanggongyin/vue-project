<template>
  <div id="app">
    <header v-show="isLogin">
      <h1>云资源管理</h1>
      <span @click="loginOut">退出</span>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    console.log('data');
    return {
      isLogin: sessionStorage.getItem('isLogin')
    };
  },
  beforeCreate: function(){
    console.log('beforeCreated');
  },
  created: function(){
    console.log('created');
  },
  methods: {
    loginOut: function() {
      this.isLogin=false
      sessionStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #000;
}
header h1 {
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
header span {
  color: #fff;
  position: absolute;
  top: 0;
  right: 30px;
}
</style>
