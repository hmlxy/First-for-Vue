<template>
  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- 引入组件需要使用组件的标签名 -->
    <hello msg="good" />
    <hello msg="goodyes" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import hello from './components/hello.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    hello,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
