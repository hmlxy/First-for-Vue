<script>
export default {
  props: ['title','id'],
  emits: ['enlarge-text','ensamll-text']
}
</script>

<template>
  <div class="blog-post">
	  <h4>{{id}} - {{ title }}</h4>
	  <button @click="$emit('enlarge-text')">Enlarge text</button>
    <button @click="$emit('ensamll-text')">EnSmall text</button>
  </div>
</template>