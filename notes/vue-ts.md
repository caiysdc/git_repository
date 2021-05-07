# Vue3.x集成ts
```node
// 安装vue客户端
# npm install --global @vue/cli

// 创建vue项目
# vue create 项目名

// 项目集成ts
# vue add typescript

// 使用集成项目进行开发
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    data(){},
    ...others,
  })
</script>
```

# Vue3.x中的路由
```js
// 1、安装路由组件
# npm install vue-router@next --save


// 2、新建文件routes.ts，配置路由
import { createRouter, createWebHashHistory } from 'vue-router'
import User from './router/User.vue'

// 配置路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '', redirect: '/userInfo' },
    { path: '/userInfo', component: User, name: 'user', alias: '/people' }, // alias可为数组
    { path: '/userInfo/:id', component: User, name: 'user', alias: '/people' }, // 动态路由
    {
      path: '/news', component: News,
      children: [
        { path: '', redirect: '/newsAdd' },
        { path: 'newsAdd', component: NewsAdd },
        { path: 'newList', component: NewList },
      ],
    }
  ],
})
export default router

// 3、main.ts文件里挂载路由
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

const app = createApp(App)
// 挂载路由
app.use(router)
app.mount('#app')


// 4、App.vue文件里使用路由
<template>
  <router-view></router-view>>
  <!-- this.$route.params -->
  <router-link :to="`/param/${id}`">首页</router-link>
  <!-- this.$route.query -->
  <router-link :to="`/param?id=${id}`">首页</router-link>
  <!-- 路由名称 -->
  <router-link :to="{ name: '', params: {}, query: {} }">首页</router-link>
</template>


// 5、编程式导航
# this.$router.push({ path: `/param/${id}` })
# this.$router.push({ path: '', query: { id: 123 } })
# this.$router.push({ path: '' })
```

# 使用vuex实现状态管理
```js
// 1、安装vuex
#  npm install vuex@next --save

// 2、新建vuex文件夹，创建store.js文件
import { ComponentCustomProperties } from 'vue'
import { Store, createStore } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
/**
// 分模块时仅有获取state里的值时需要添加模块名称
const store = createStore({
  modules: { invoice, school },
})
**/
const store = createStore({
  state() {// this.$store.state.
    return {
      num: 0,
    }
  },
  mutations: {// 更新state: this.$store.commit('setInvoice')
    setInvoice(state: any, payload: object) {
      Object.assign(state, payload)
    }
  },
  getters: {// 类似computed: this.$store.getters.getNum2
    getNum2(state: any) {
      return state.num ** 2
    }
  },
  actions: {//异步 this.$store.dispatch('setInvoice')
    setInvoice(content: any, num: number) {
      console.log({ num })
      content.commit('setInvoice', { num: num + 10 })
    }
  },
})
export default store


// 3、挂载vuex
import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
const app = createApp(App)
app.use(store) // 挂载vuex
app.mount('#app')

// 4、使用vuex
# this.$store.state.  // 访问属性
# this.$store.commit('方法名')  // 调用mutations里定义的方法
# computed里使用mapState进行映射
<template>
  <div>{{ count }}</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
export default defineComponent({
  computed: {
    ...mapState(["count"]),
  },
});
</script>
// 组合式api
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    return {
      name: computed(() => store.state.school.name),
      year: computed(() => store.state.school.year),
      getShcoolInfo: computed(() => {
        return store.getters.getShcoolInfo;
      }),
      setYear() {
        store.dispatch("setYear", 2021);
      },
      setSchool() {
        store.commit("setSchool", { name: "上海交通大学" });
      },
    };
  },
});
</script>
```

# Vue3.x集成element
```js
// 安装element-plus
# npm install element-plus --save

// 挂载element
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './vuex/store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App)
app.use(router)// 挂载路由
app.use(ElementPlus)// 挂载element
app.use(store)// 挂载vuex
app.mount('#app')

```
