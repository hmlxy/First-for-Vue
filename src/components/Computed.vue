<script>
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          {book:'Vue 2 - Advanced Guide'},
          {book:'Vue 3 - Basic Guide'},
          {book:'Vue 4 - The Mystery'},
        ],
      },
    };
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No';
    },
  },
};
</script>

<template>
  <p>Has published books:</p>
  <p>{{ publishedBooksMessage }}</p>
  <li v-for="(item,index) in author.books">
    {{author.name}}-{{item.book}}
  
  </li>
</template>

<style scoped>
p {
  font-size: 24px;
}
</style>
