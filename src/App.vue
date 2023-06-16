<script>
// 导入需要用到的



// 这里引入组件的文件
import HelloWorld from './components/HelloWorld.vue';
import methods from './components/methods.vue';
import computed from './components/computed.vue';
import vif from './components/vif.vue';
import vfor from './components/vfor.vue';
import von from './components/von.vue';
import vmodel from './components/vmodel.vue';
import watch from './components/watch.vue';
import ref from './components/ref.vue';
import props from './components/props.vue';


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
    vmodel,
    watch,
    ref,
    props,
  },

  data(){
    return {
       posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  },


};
</script>


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
    
    <div class="v-model gap">
     <h1 class="blue">v-model</h1>
     <vmodel></vmodel>
    </div>

    <div class="watch gap">
     <h1 class="blue">watch</h1>
    <watch> </watch>
    </div>

    <div class="ref gap">
     <h1 class="blue">ref</h1>
    <ref> </ref>
    </div>

    <div class="props gap">
     <h1 class="blue">props</h1>
    <props v-for="post in posts" :title="post.title" :id="post.id"></props>
    </div>
  


  </div>
</template>










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
