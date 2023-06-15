<script>
export default {
  data() {
  	return {
	    awesome: true,
      ok:true,
      disable:false
  	}
	}
}
</script>

<template v-if="disable">
  <button id="test3-top_btn" @click="awesome = !awesome">cilck to transform words</button>
  <!-- awosome = ！aswsome是一个赋值，不是判断 -->
	<h1 v-if="awesome">Vue is awesome!</h1>
	<h1 v-else>Oh no 😢</h1>

  
  <button id="test3-top_btn" @click="ok = !ok">change ok</button>
  <h1 v-if="ok">ok:{{ok}}</h1>
  <h1 v-else>ok:{{ok}}</h1>
  <h1>show:{{show}}</h1>

</template>

<template name="two">
  <router-view></router-view>
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
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