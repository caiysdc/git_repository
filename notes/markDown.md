# MarkDown教程
## 1、文档后缀
```css
    .md   或   .markdown
```
## 2、标题
```css
  # h1标题
  ## h2标题
  ### h3标题
  #### h4标题
  ##### h5标题
  ###### h6标题
  =：在文本下使用一个或多个=亦可作为一级标题
  -：在文本下使用1个或多个-亦可作为二级标题
```
## 3、段落格式
```javascript
  换行：
    a.两空格一回车换行
    b.使用一空行进行换行
  斜体： *斜体* _斜体_
  粗体： **粗体** __粗体__
  粗斜体： ***粗斜体***   ___粗斜体___
  分隔线： 三个或三个以上 * 、 -、_
  删除线： ~~删除线~~
  下划线： <u>下划线</u>
  脚注：[^脚注]
  	[^脚注]: 这是一个脚注

```
## 4、列表
### 4.1无序列表    *(+、-)后加一个空格
```javascript
* 第一项
+ 第二项
- 第三项
```
### 4.2 有序列表    数字. 后加一个空格
```javascript
1. 第一项
2. 第二项
3. 第三项
```
### 4.3 列表嵌套   子列表的选项前加四个空格
```javascript
1. 第一项
    * 第一项
    * 第二项
2. 第二项
    + 第一项
    + 第二项

```
## 5、区块   > 后紧跟一个空格
```javascript
> 区块引用
>> 第一层嵌套
>>> 第二层嵌套
```
### 5.1 区块中使用列表
```javascript
> 区块引用
> * 无序列表
```
### 5.2 列表中使用区块
```javascript
+ 列表1
    > 区块
+ 列表2
    > 区块
```
## 6、链接
```
普通链接：  [链接名称](链接地址)
      或：  <链接地址>
高级链接：  [链接名称][地址变量]
  [地址变量]：www.baidu.com
```

这是一个链接[百度][url]  

这是一个[^脚注]  

## 7、表格
```
| 姓名 | 性别 | 年龄 |
| ----: | :----: | :---- |
| 苏东坡 | 男 | 82 |
```
| 姓名 | 性别 | 年龄 |
| ----: | :----: | :---- |
| 苏东坡 | 男 | 82 |

## 8、图片
```js
![alt属性文本](图片地址 "title")
```
![alt属性文本](图片地址 "图片标题")

[ url ]: http://www.baidu.com
[^脚注]: www.baidu.com



