<script>
export default {
  data() {
  	return {
	    awesome: true,
      type:'c',
      ok:true
  	}
	}
}
</script>

<template>

  <button id="test3-top_btn" @click="awesome = !awesome">cilck to transform words</button>
  <!-- awosome = ！aswsome是一个赋值，不是判断 -->

	<h1 v-if="awesome">Vue is awesome!</h1>
	<h1 v-else>Oh no 😢</h1>

  
  <button id="test3-top_btn" @click="ok = !ok">cilck to transform words</button>
  <h1 v-if="ok">good</h1>
   <h1 v-else>bad</h1>


</template>

<style scoped>
#test3-top_btn {
  height: 50px;
  font-size:24px;
}

#btn2 {
  height:40px;
  width:200px;
}
</style>