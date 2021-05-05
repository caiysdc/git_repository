# mockjs
## 安装
```node
  node  npm install mockjs --save // 局部安装
        npm install mockjs -g     // 全局安装
  ------------------------------
  bower npm install -g bower
        bower install --save mockjs
```

## 语法(Mock.Random===@)
```mock
  random url  // 生成url链接
  random -h // 帮助
```
## 语法规范

    '属性名|生成规则'：属性值
```js
  'name|min-max': value
  'name|count': value
  'name|min-max.dmin-dmax': value
  'name|min-max.dcount': value
  'name|count.dmin-dmax': value
  'name|count.dcount': value
  'name|+step': value
```

### 1、属性值是字符串String
```node
  'name|min-max': string  // 重复min-max次字符串
  'name|count': string  // 重复count次字符串
```

### 2、属性值是数字Number
```node
  'name|+1': number // 初始值为number,递增1
  'name|min-max': number  // 生成min-max之间的数值
  'name|min-max.dmin-dmax': number // 生成min-max之间的数值，小数位数为dmin-dmax
```

### 3、属性值是布尔型Boolean
```node
  'name|1': boolean // 随机生成布尔值，概率都为1/2
  'name|min-max': value // 随机生成布尔值，value的概率是min/(min+max)
```

### 4、属性值是数组Array
```node
  'name|1': array // array中随机选取一个元素
  'name|+1': array // array中顺序选取一个元素
  'name|min-max': array // 随机生成新数组，长度为min-max
  'name|count': array // 生成长度为count的数组
```

### 5、属性值是对象Object
```node
  'name|count': object    // object中随机选取count个属性
  'name|min-max': object  // object中随机选取min-max个属性
```

### 6、属性值是函数Function
```node
'name': function  //执行函数function,取其返回值为最终属性值
```

### 7、属性值是正则表达式RegExp
```node
  'name': regexp    // 根据正则表达式反向生成可匹配的字符串
```

## Mock.Random

```js
  1、Mock.Random.boolean(min?,max?,current?)
  2、Mock.Random.natural(min?,max?) // 返回大于等于0的整数，最大值为9007199254740992
  3、Mock.Random.integer(min?,max?) // 返回随机整数（-9007199254740992，9007199254740992）
  4、Mock.Random.float( min?, max?, dmin?, dmax? )  // 返回随机浮点数，(dmin,dmax)=(0,17)
  5、Mock.Random.character(pool?)   // 返回随机字符
    const defaultPool = {
      lower: "abcdefghijklmnopqrstuvwxyz",
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      number: "0123456789",
      symbol: "!@#$%^&*()[]"
    }
  6、Mock.Random.string(pool?,min?,max?)  // 返回随机字符串
      Random.string()
      Random.string( length )
      Random.string( pool, length )
      Random.string( min, max )   // min,max默认值为3，7
      Random.string( pool, min, max )
  7、Mock.Random.range(start?, stop, step?)   // 返回整型数组  起始值，结束值（不包含），步长， 步长默认值为1
  8、Mock.Random.guid() // 随机生成guid
  9、Mock.Random.id() // 随机生成一个18位身份证号
  10、Mcok.Random.increment(step?) // 生成一个全局自增整数，step默认为1
  11、Mock.Random.capitalize('string')  // 字符串首字母大写
  12、Mock.Random.upper('str')         // 字符串转大写
  13、Mock.Random.lower('str')          // 字符串转小写
  14、Mock.Random.pick(arr)             // 从数组中随机选取一个元素
  15、Mock.Random.shuffle(arr)          // 打乱数组顺序并返回
  16、Mock.Random.region()              // 随机生成一个中国大区
  17、Mock.Random.province()            // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）
  18、Mock.Random.city(prefix?)         // 随机生成一个中国市，prefix为true时连带生成省
  19、Mock.Random.county(prefix?)       // 随机生成一个（中国）县。prefix为true时生成所属省、市
  20、Mock.Random.zip()                 // 随机生成邮政编码（6位数字）
  21、Mock.Random.url(protocol?,host?)  // 随机生成url
  22、Mock.Random.protocol()            // 随机生成url协议
  23、Mock.Random.domain()              // 随机生成域名
  24、Mock.Random.tld()                 // 随机生成顶级域名
  25、Mock.Random.email(domain?)        // 随机生成邮件地址
  26、Mock.Random.ip()                  // 随机生成ip地址
  27、Mock.Random.first()               // 随机生成常见英文名
  28、Mock.Random.last()                // 随机生成常见英文姓
  29、Mock.Random.name(middle?)         // 随机生成常见英文姓名，middle为true表示生成中间名
  30、Mock.Random.cfirst()              // 生成中文姓
  31、Mock.Random.clast()               // 生成中文名
  32、Mock.Random.cname()               // 生成中文姓名
  33、颜色生成
    Mock.Random.color()       // 十六进制
    Mock.Random.hex()         // 十六进制
    Mock.Random.rgb()
    Mock.Random.rgba()
    Mock.Random.hsl()
  34、Mock.Random.image( size?, background?, foreground?, format?, text? )   // 生成一个随机的图片地址。
    // format默认为png，可选值包括：'png'、'gif'、'jpg'
    /* size = [
        '300x250', '250x250', '240x400', '336x280', 
        '180x150', '720x300', '468x60', '234x60', 
        '88x31', '120x90', '120x60', '120x240', 
        '125x125', '728x90', '160x600', '120x600', 
        '300x600'
       ]*/
    // background默认为#000
    // foreground默认值为#fff
    // text默认为size
    Mock.Random.image()
    Mock.Random.image( size )
    Mock.Random.image( size, background )
    Mock.Random.image( size, background, text )
    Mock.Random.image( size, background, foreground, text )
    Mock.Random.image( size, background, foreground, format, text )
  35、Mock.Random.dataImage( size?, text? )   // 生成base64的图片编码，text为图片上的文字，默认值为size
  36、Mock.Random.paragraph(min?, max?)    // 随机生成一段文本，min，max表示文本句子个数
      Mock.Random.paragraph()  // 默认为3-7
      Mock.Random.paragraph( len )
      Mock.Random.paragraph( min, max )
  37、Mock.Random.cparagraph(min?,max?)  // 随机生成一段中文文本，用法同上
  38、Mock.Random.sentence(min?, max?)   // 随机生成一个句子，第一个单词首字母大小
      Mock.Random.sentence()   // 单词个数默认12-18
      Mock.Random.sentence( len )
      Mock.Random.sentence( min, max )
  39、Mock.Random.csentence(min?, max?)  // 随机生成一个中文句子，用法同上
  40、Mock.Random.word(min?, max?)   // 随机生成一个单词，单词长度默认为3-10
      Mock.Random.word()
      Mock.Random.word( len )
      Mock.Random.word( min, max )
  41、Mock.Random.cword(pool?, min?, max?) // 随机生成汉字,汉字长度默认为1
      Mock.Random.cword()
      Mock.Random.cword( pool )
      Mock.Random.cword( length )
      Mock.Random.cword( pool, length )
      Mock.Random.cword( min, max )
      Mock.Random.cword( pool, min, max )
  42、Mock.Random.title(min?,max?)   // 随机生成一句标题，单词个数默认为3-7
      Mock.Random.title()
      Mock.Random.title( len )
      Mock.Random.title( min, max )
  43、Mock.Random.ctitle(min?, max?)   // 随机生成一个中文标题，长度默认3-7
  44、Mock.Random.date(format?)
  45、Mock.Random.time(format?)
  46、Mock.Random.datetime(format?)
  47、Mock.Random.now(unit?, format?)   // 返回当前的日期和时间字符串，unit为单位（year month week day hour minute second）,表示格式化的层级,week返回本周周末的日期字符串
  // y-年 M-月 d-日 H-时（24） h-时（12） m-分 s-秒 SS-秒后三位  A-AM OR PM a-am or pm T-时间戳
```