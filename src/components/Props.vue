<script>
export default {
  // 使用对象定义prop更加规范
  props: {
    title: {
      type:String,
      required:true,
      default:'this is prop title'
    },
    id: {
      type:Number,
      required:true,
      default:'this is prop id'
    }
  }
}
</script>

<template>
  <h4>{{id}} - {{ title }}</h4>
</template>