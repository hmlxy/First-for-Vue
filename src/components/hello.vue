<template>
  <button id="hello-btn1" @click="count++">Count is: {{ count }}</button>

</template>

<script>
export default {
  name:'hello',
  props: {
    msg:String
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
#hello-btn1 {
  font-weight: bold;
  height:20px;
}
</style>
