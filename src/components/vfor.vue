<script>
export default {
  data() {
    return {
      parentMessage: 'Parent',
      title:'杭州亚运会',
      items: [{ message: 'Foo',score:1 }, { message: 'Bar',score:1 },{message:'good',score:1}]
    };
  },
};
</script>

<template>
  <h1>blow is v-for</h1>
  <li v-for="(item, index) in items">
   {{title}} -奥林- {{ index }} - {{'中国队'}}- {{ item.message }}  - {{item.score}}
  </li>
</template>
