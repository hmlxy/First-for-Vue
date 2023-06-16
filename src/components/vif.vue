<script>

export default {
  data() {
    return {
      awesome: true,
      ok: true,
      disable: false,
    };
  },
};
</script>

<template >


  <button id="test3-top_btn" @click="ok = !ok">change ok</button>
  <h1 v-if="ok">ok:{{ ok }}</h1>
  <h1 v-else>ok:{{ ok }}</h1>

  <template v-if="ok">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
</template>



<style scoped>
#test3-top_btn {
  height: 50px;
  font-size: 24px;
}

#btn2 {
  height: 40px;
  width: 200px;
}
</style>
