<script>
export default {
  data() {
    return {
      list: [1, 2, 3]
    }
  },
  mounted() {
    this.$refs.p.textContent="hello world"
  }
}
</script>

<template>
  <p ref="p">hello</p>
</template>