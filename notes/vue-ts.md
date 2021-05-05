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