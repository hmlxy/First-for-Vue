<script>
export default {
  data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event) {
      // `this` inside methods points to the current active instance
      alert(`Hello ${this.name}!`)
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>

<template>
	<button class="von_btn" @click="greet">Greet</button>
</template>

<style>
.von_btn{
  height:40px;
  width:200px;
}
</style>