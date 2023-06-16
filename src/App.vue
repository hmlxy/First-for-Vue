<template>
  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- 标签名需要使用组件的名称 -->
    <div class="mounted gap">
    <h1 class="blue">methods</h1>
      <methods></methods>
    </div>
  
    <div class="computed gap">
     <h1 class="blue">computed</h1>
      <computed ></testcomputed2>
    </div>

    <div class="v-if gap">
     <h1 class="blue">v-if</h1>
      <vif></vif>
     </div>

    <div class="v-for gap">
     <h1 class="blue">v-for</h1>
      <vfor></vfor>
    </div>

     
    <div class="v-on gap">
    <h1 class="blue">v-on</h1>
      <von></von>
    </div>
  


  </div>
</template>






<script>
// 这里引入组件的文件
import HelloWorld from './components/HelloWorld.vue';
import methods from './components/methods.vue';
import computed from './components/computed.vue';
import vif from './components/vif.vue';
import vfor from './components/vfor.vue';
import von from './components/von.vue';


export default {
  // 这里将组件命名为App
  name: 'App',
  
  // 这里引用上面定义的组件文件的名称，从而在template中可以通过同样名称的标签名就能使用整个组件的内容，也就是注册子组件
  components: {
    HelloWorld,
    methods,
    computed,
    vif,
    vfor,
    von,
  },

  data(){
    return {
      show:false
    }
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

.gap {
  margin:20px;
}

.blue {
  color: blue;
}













</style>
