<template>
  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- 标签名需要使用组件的名称 -->
    <hello msg="hello" />
    <test1 msg="test1" />
    <test2 ></test2>
  </div>
</template>

<script>
// 这里引入组件的文件
import HelloWorld from './components/HelloWorld.vue';
import hello from './components/hello.vue';
import test1 from './components/test1.vue';
import test2 from './components/test2.vue';

export default {
  name: 'App',
  // 这里引用上面定义的组件文件的名称，从而在template中可以通过同样名称的标签名就能使用整个组件的内容，也就是注册子组件
  components: {
    HelloWorld,
    hello,
    test1,
    test2,
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
