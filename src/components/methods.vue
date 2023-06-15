<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  name:'test1',
  props: {
    msg:String
  },
  data() {
    return {
      count: 0,
    };
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件处理器绑定
  methods: {
    increment() {
      this.count+=2;
    },
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}`);
  },
};
</script>

<template>
  <button id="btn1" @click="increment">Count is: {{ count }}</button>
</template>

<style scoped>
#btn1{
  height:40px;
  width:200px;
  font-size:24px;
}
</style>
