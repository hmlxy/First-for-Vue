<script>
export default {
  data() {
    return {
      question1: '',
      question2:'',
      question:'',
      answer: 'this is answer',
   
    }
  },

  created() {
    this.$watch('question', (newQuestion) => {
       if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    })
  },


  watch: {
    // whenever question changes, this function will run
    question1(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    },

    question2:{
      handler(newQuestion) {
          if (newQuestion.indexOf('?') > -1) {
          this.getAnswer()
        }
      },
      // 强制立即执行回调
      immediate: true
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
   
      try {
        // 通过fetch获取数据
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
    
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
    
      }
    }
  }
}
</script>

<template>
  <p>
    Ask a yes/no question:
    <h1>&watch</h1>
    <input v-model="question" />
    <h1>function</h1>
    <input v-model="question1" />
    <h1>computed</h1>
    <input v-model="question2" />
  </p>
  <p>{{ answer }}</p>
  
</template>