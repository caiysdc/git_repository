
# 环境准备
```js
  1、安装vue：npm install vue
  2、安装vue客户端：npm npm install -g @vue/cli
  3、查看vue版本：vue -V   vue --version
  4、更新vue版本：npm update -g @vue/cli
  5、创建项目：vue create 项目名
```
# vue笔记
##缩写：
```css
v-bind:title = :title
v-on:click = @click
```
## vue指令
```css
  1、v-bind:
  2、v-on:
  3、v-if=/v-else-if=/v-else    v-if为true时代码才加载
  4、v-show=  代码存在，为true时内容才显示
  5、v-for=   置于需要循环显示的标签上
  6、v-model= 实现表单输入之间的双向绑定
  7、v-once   一次性插值
  8、v-html=  输出html
```
## vue组件化
```js
  Vue.component('组件名', { template: '', props: [...参数] })
  var data = { a: '1' }
  var vm = new Vue({
    el: '#app',
    data,
    mixins: [baseMixin], // baseMixin为一数据结构和vue实例数据结构相同的对象，数据结构冲突时遵循就近原则
    methods:{},// 方法
    computed: {// 计算属性
      fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    },
    watch: {},// 侦听属性
    beforeCreate() { },// 实例被创建前执行
    created() { },// 实例被创建后执行
    beforeMount() {},// 实例被挂载前执行
    mounted() { },// 实例被挂载后执行
    beforeUpdate() {},// 实例被更新前执行
    updated() {},// 实例被更新后执行
    beforeDestory() {},// 实例被销毁前执行，3.0已废弃
    destroyed() {},// 实例被销毁后执行，3.0已废弃
    beforeUnmount(){},
    unmounted(){},
    activated(){ console.log('keep-alive 缓存的组件激活时调用') },
    deactivated(){console.log('keep-alive 缓存的组件停用时调用')},
    setup(){}
  })
  data.a === vm.a // true
  vm.$data === data // true
  vm.$el === document.getElementById('app') // true
  vm.fn() // 可直接调用methods里的方法，fn为方法名
  vm.$watch('a', function(newValue, oldValue) { // 监听方法
    // vm.a改变后调用
  })
```
## 其他
```js
  1、动态参数：<a :[href]="url">百度</a>
  2、循环遍历：v-for="n in 10"
  3、<li is="todo-item" v-for="(todo, index) in todos" :title="todo.title" @remove="todos.splice(index, 1)"></li> // is="todo-item"，使用todo-item组件
    // $emit子组件调用父组件的方法并传递数据
    Vue.component('todo-item', {
      template: `
        <li>
          {{ title }}
          <button @:click="$emit('remove')">Remove</button>\
        </li>
      `,
      props: ['title']
    })
  4、使用sass语法
    npm install -D sass-loader node-sass
    <style lang="scss" scoped></style>
  5、父组件可将this传给子组件，子组件不能改变父组件的属性（单项数据流）
  6、父组件使用this.$refs调用和执行子组件的方法，子组件使用this.$parent调用和执行父组件的方法
  7、<slot>默认值</slot>获取children内容
  8、使用keep-alive进行组件状态缓存（需要缓存的组件需是直接子元素）
    <keep-alive>
      <life-cycle v-if="show" />
    </keep-alive>
    当show为false时组件会保存于缓存
  9、this.$nextTick(() => {
    console.log("整个视图渲染完成后执行的代码")
  })
  10、全局配置：app.config.globalProperties.Axios = Axios // this.Axios调用
  11、npm时添加 --save 为添加包配置（他人可直接install安装依赖）
  12、全局配置mixin:app.mixin({})
  13、使用teleport将组件挂载到指定位置
    <teleport to="body(挂载节点)">组件</teleport>
```
## $
```js
  1、$emit()
  2、$event
```
## 修饰符-可串联，可无具体方法
```css
  1、.prevent // 阻止默认
  2、.stop  // 阻止冒泡
  3、.passive // 事件的默认行为将会立即触发，不和.prevent（无效） 一起使用
  4、.capture // 添加事件监听器时使用事件捕获模式，即内部元素触发的事件先在此处理，然后才交由内部元素进行处理
  5、.self  // 当在 event.target 是当前元素自身时触发处理函数
  6、.once  // 事件只触发一次
  7、@keyup.enter // .enter .tab .delete (捕获“删除”和“退格”键) .esc .space .up .down .left .right .page-down
  8、可通过全局 config.keyCodes 对象自定义按键修饰符别名：

    // 可以使用 `v-on:keyup.f1`
    Vue.config.keyCodes.f1 = 112

  9、keyup.ctrl // 系统修饰键：ctrl alt shift meta(window键)

    <!-- Alt + C -->
    <input @keyup.alt.67="clear" />
    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">Do something</div>

  10、.exact：修饰符允许你控制由精确的系统修饰符组合触发的事件。

    <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
    <button v-on:click.ctrl="onClick">A</button>
    <!-- 有且只有 Ctrl 被按下的时候才触发 -->
    <button v-on:click.ctrl.exact="onCtrlClick">A</button>
    <!-- 没有任何系统修饰符被按下的时候才触发 -->
    <button v-on:click.exact="onClick">A</button>
```
## 表单输入绑定
```js
  1、用 v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。
  2、checkbox 和 radio 使用 checked property 和 change 事件；
  3、select 字段将 value 作为 prop 并将 change 作为事件。
  4、text 和 textarea 元素使用 value property 和 input 事件；
  5、需要使用输入法 (如中文、日文、韩文等) 的语言，v-model 不会在输入法组合文字过程中得到更新。若想处理这个过程，需使用 input 事件。
  6、单选按钮，复选框及选择框的选项，v-model 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)。
  7、修饰符
    v-model.lazy  // input输入框在 change 事件之后进行同步（默认为input事件）
    v-model.number  // 自动将用户的输入值转为数值类型
    v-model.trim  // 自动过滤用户输入的首尾空白字符
  // 选中时toggle值为yes,未选中时toggle值为no
  8、<input type="checkbox" v-model="toggle" true-value="yes" false-value="no"
>
```
## Vue样式
```css
  1、class  // class和:class可分开分别赋值
    v-bind:class="{ active: isActive }"
    v-bind:class="{ active: isActive, 'text-danger': hasError }"
    v-bind:class="classObject"  // classObject可为data里面对象或返回对象的计算属性
    v-bind:class="[activeClass, errorClass]"
    v-bind:class="[isActive ? activeClass : '', errorClass]"
    v-bind:class="[{ active: isActive }, errorClass]"
  2、style  // 属性名可用驼峰式或短横线分隔 (记得用引号括起来) 来命名
    v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"
    v-bind:style="styleObject"
    v-bind:style="[baseStyles, overridingStyles]" // 多个样式对象
    v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"  // 渲染数组中最后一个被浏览器支持的值
```
## 注意事项
```css
  1、只有当实例被创建时就已经存在于 data 中的 属性 才是响应式的
  2、使用 Object.freeze()，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化
  3、模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。
  4、在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写
  5、计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。只要 依赖属性 还没发生改变，多次访问 计算属性 会立即返回之前的计算结果，而不必再次执行函数，若不希望有缓存，需用方法替代。
  6、计算属性默认只有 getter，需要时可提供一个 setter。
  7、当在一个自定义组件上使用 class property 时，这些 class 将被添加到该组件的根元素上面。这个元素上已经存在的 class 不会被覆盖（类名相同亦不会覆盖）。
  8、当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS property 时，如 transform，Vue.js 会自动侦测并添加相应的前缀
  9、在 <template> 元素上使用 v-if（或v-for） 条件渲染分组切换多个元素
  10、用 key 管理可复用的元素，key不同组件才会完全重新渲染
  11、v-show 不支持 <template> 元素，也不支持 v-else
  12、当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。
  13、v-for="(value, key, index) in object"，value为对象的value值
  14、使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
  15、修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。单单释放 ctrl 也不会触发事件。若想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。
```
## 自定义组件双向绑定及自定义事件
```html
  // 子组件
  <div>
    <input :value="firstName"  @input="$emit('update:firstName', $event.target.value)" />
    <input :value="lastName" @input="$emit('update:lastName', $event.target.value)" />
    <button @click="$emit('login', firstName, lastName)"> 执行登录 </button>
  </div>
  // 父组件
  <my-input @login="doLogin" v-model:firstName="firstName" v-model:lastName="lastName" />

```

## 非父子组件间的传值，使用mitt
```js
  1、安装mitt npm install -D mitt
  2、新建js文件实例化mitt
  3、监听事件：mitt().on('事件名', () => {
    // 方法体
  })
  4、触发事件：mitt().emit('事件名', param)
```
## 自定义attribute继承
```html
  1、默认继承于子组件的根节点
  2、自定义继承
  export default {
    inheritAttrs: false, //取消自定义属性默认继承
  }
  // 使用v-bind指定默认继承节点
  <button v-bind="$attrs">
    <slot>Default</slot>
  </button>
```
## api接口请求模块
```js
  // axios使用（不支持jsonp接口）
  1、安装：npm install -D axios
  2、import axios from 'axios' 引入并使用// axiow.get()/post()
  // fetch-jsonp使用
  1、 安装： npm install fetch-jsonp
  2、import jsonp from 'fetch-jsonp'
```