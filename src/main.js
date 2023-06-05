// 使用require()函数引入vue模块
const { createApp } = require('vue');
// 引入包含App组件的文件，通常是App.vue文件（这里使用ES6模块导入）
import App from './App.vue';
//createApp()函数的参数可以是一个Vue组件对象或一个包含Vue组件的JavaScript模块。
// 我们将App.vue文件导入，并传递给createApp()函数，这样createApp()函数就会创建一个Vue应用实例，并将App组件作为根组件挂载到应用程序的指定DOM元素上。
// 我们使用mount()函数将应用程序实例挂载到指定的DOM元素上，以启动应用程序。在这个示例中，我们将应用实例挂载到id为"app"的DOM元素中。这意味着App组件将被渲染到id为"app"的元素内。如果该元素不存在，将会抛出错误。
// 简称挂载Vue实例
createApp(App).mount('#app');

// 这是一个较为完整的框架
// 引入Vue框架及所需扩展
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// // 创建Vue实例
// const app = createApp(App)

// // 注册路由
// app.use(router)

// // 注册状态管理
// app.use(store)

// // 注册全局组件或指令，如Vue.use(VueToasted)

// // 挂载Vue实例
// app.mount('#app')
