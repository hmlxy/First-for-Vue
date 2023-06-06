<script>
export default {
  data() {
  	return {
	    awesome: true,
      type:'c',
  	}
	}
}
</script>

<template>

  <button id="test3-top_btn" @click="awesome = !awesome">cilck to transform words</button>

	<h1 v-if="awesome">Vue is awesome!</h1>
	<h1 v-else>Oh no 😢</h1>
  <h1 v-if="type === 'a'">a</h1>
  <h1 v-else-if="type === 'b'">b</h1>
  <h1 v-else="type === 'c'">c</h1>

</template>

<style scoped>
#test3-top_btn {
  height: 50px;
  font-size:24px;
}
</style>