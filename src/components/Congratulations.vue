<script>
import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

export default {
  //钩子函数初始化自动调用
  mounted() {
    this.showConfetti()
  },
  
  methods: {
    showConfetti() {
      confetti.addConfetti()
    }
  }
}
</script>

<template>
  <h1 @click="showConfetti">🎉 Congratulations!</h1>
</template>

<style>
h1 {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
}
</style>