<script>
export default {
  data() {
    return {
      message1: '',
      message2:'',
      checkedNames: [],
      picked:'',
      selected:'',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      toggle:'',
      yeslec:'you selected yes',
      nolec:'you selected no',
      pick:'',
      first:'radio first',
      second:'radio seconed',
      msg:'',
      msg1:'',
      age:'',
    }
  }
}
</script>

<template>
  <h1>text</h1>
  <p>Message is: {{ message1 }}</p>
	<input v-model="message1" placeholder="edit me"/>

  <div class="textarea">
  <h1>textarea</h1>
    <div>Multiline message is:</div>
    <p style="white-space: pre-line;">{{ message2 }}</p>
    <textarea v-model="message2" placeholder="add multiple lines"></textarea> 
  </div>
 
  <div class="checkbox">
    <H1>checkbox</H1>
    <div>Checked names: {{ checkedNames }}</div>
    <!-- v-model会将value的值传递到checkNames变量中 -->
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <!-- 通过for和id为jack的元素关联，也就是点击这个元素等于点击绑定的元素 -->
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
  </div>

  <div class="radiobox">
    <h1>radiobox</h1>
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
  </div>

  <div class="select">
    <h1>select</h1>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <!-- 这里使用v-for动态渲染简化了代码 -->
      <!-- 在选择前会显示option.text，选择后会显示相应的option.value -->
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>

    <div>Selected: {{ selected }}</div>

    <h1>v-bind:value</h1>
    <p> select:{{toggle}} </p>
    <input type="checkbox" v-model="toggle" :true-value="yeslec" :false-value="nolec"/>
    <p>select:{{pick}}</p>
    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />
    <p>.lazy{{msg}}</p>
    <input v-model.lazy="msg" />
    <p>.number{{age}}</p>
    <input v-model.number="age" />
    <p>.trim{{msg1}}</p>
    <input v-model.trim="msg1" />
 

    
    
  
  </div>


  

</template>

