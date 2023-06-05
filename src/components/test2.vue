<script>
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery',
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
  <p>this is an compute</p>
  <span>{{ publishedBooksMessage }}</span>
</template>

<style>
p {
  font-size: 24px;
}
</style>
