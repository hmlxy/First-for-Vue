<script>
export default {
  props: ['title','id'],
  //声明出触发事件的名称
  emits: ['change-red','change-blue'],
  data(){
    return{
      redtext:'red',
      bluetext:'blue'
    }
  }

}
</script>

<template>
  <div class="blog-post">
	  <h4>hello world</h4>
	  <button @click="$emit('change-red',redtext)">change-red</button>
    <button @click="$emit('change-blue',bluetext)">change-blue</button>
  </div>
</template>