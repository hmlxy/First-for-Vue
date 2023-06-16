<script>
export default {
  data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    say(message) {
      alert(message)
    },

    warn(message, event) {
      // 这里可以访问 DOM 原生事件
      if (event) {
        event.preventDefault()
      }
      alert(message)
   },

  },

};
</script>

<template>

  <button class="von_btn" @click="say('hello')">Say hello</button>
  <button class="von_btn" @click="say('bye')">Say bye</button>

  <!-- 使用特殊的 $event 变量 -->
<button  class="von_btn" @click="warn('use &event.', $event)">
  Submit
</button>

<!-- 使用内联箭头函数 -->
<button  class="von_btn" @click="(event) => warn('ues (event) => ', event)">
  Submit
</button>



</template>

<style>
.von_btn{
  height:40px;
  width:200px;
}
</style>