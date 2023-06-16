<script>
export default {

  data() {
    return {
      parentMessage: 'Parent',
      title:'杭州亚运会',
      items: [{ message: 'Foo',score:1 }, { message: 'Bar',score:1 },{message:'good',score:1}],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },

      numbers: [1, 2, 3, 4, 5],
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
    };


  },

  computed: {
    evenNumbers() {
      return this.numbers.filter(n => n % 2 === 0)
    }
  },

  methods: {
  even(n) {
    return n.filter(n => n % 2 === 0)
    }
  },

};
</script>

<template>
  <!-- 注意v-for的元素位置是固定的 -->
  <li v-for="(item, index) in items">
   {{title}} -奥林- {{ index }} - {{'中国队'}}- {{ item.message }}  - {{item.score}}
  </li>

  <div class="value" v>
    <div v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
    </div>
  </div>

  <li v-for="n in evenNumbers">{{ n }}</li>

    <ul v-for="numbers in sets">
     <li v-for="n in even(numbers)">{{ n }}</li>
    </ul>



</template>
