# 深浅拷贝的由来到实现

### 一、js数据类型:

基本数据类型：number,string,boolean,null,undefined

引用数据类型：object,array,function


### 二、存储方式区别：

基本数据类型：地址和值都存储在了栈内存中

引用数据类型：地址存在了栈内存中，值存在了堆内存中

产生区别的原因：栈内存中只能存储固定大小的数据，而引用类型大小不固定，所以只能存储在堆内存中


### 三、拷贝：

基本数据类型：简单赋值就能实现拷贝

引用数据类型：简单赋值不能实现拷贝，简单赋值复制的是引用地址，不是数据本身，而且对复制的后的数据修改，会导致原有数据的修改，所以引发了深浅拷贝概念


### 四、代码
```
// 基本数据类型赋值
var a=1;
var b=a;
console.log('a:'+a);
console.log('b:'+b);
b=2;
console.log('a:'+a);
console.log('b:'+b);


// 引用数据类型赋值------>修改赋值后数据，原有数据也被修改了
var obj1={a:1,b:2};
var obj2=obj1;
console.log('obj1:'+JSON.stringify(obj1))
console.log('obj2:'+JSON.stringify(obj2))
obj2.c=3;
console.log('obj1:'+JSON.stringify(obj1))
console.log('obj2:'+JSON.stringify(obj2))

// jquery封装extend方法，实现深浅拷贝------>原有数据不会被修改

// 1、浅拷贝(默认)
var obj3={a:1,b:2};
// var obj4=$.extend({},obj3);
var obj4=$.extend(false,{},obj3);
obj4.c=3;
console.log('obj3:'+JSON.stringify(obj3))
console.log('obj4:'+JSON.stringify(obj4))
console.log('浅拷贝...')



// 2、深拷贝
var obj5={a:1,b:2};
var obj6=$.extend(true,{},obj5);
obj6.c=3;
console.log('obj5:'+JSON.stringify(obj5))
console.log('obj6:'+JSON.stringify(obj6))
console.log('深拷贝...')

/* 深浅拷贝特点
1、原有数据不会被修改
2、 复杂对象拷贝时，相同属性，且属性值是对象，浅拷贝（默认）后者直接覆盖前者
    深拷贝前后比较相同属性覆盖，不同属性合并
*/
var obj9={a:1,b:2,c:{d:3,e:4}};
var obj10={c:{f:5},g:6};
var obj11=$.extend(false,{},obj9,obj10);
var obj12=$.extend(true,{},obj9,obj10);
console.log('obj11:'+JSON.stringify(obj11))
console.log('obj12:'+JSON.stringify(obj12))

```

### 五、拓展
```
// $.extend与$.fn.extend

// $.extend(item) 相当于为jquery全局对象添加了一个静态方法，可直接调用该方法

$.extend({say:function(){console.log('hello world')}})

$.say()




// $.fn.extend(item) 是为每一个实例添加一个实例方法了

$.fn.extend({say:function(val){console.log(val)}})

$('#demo').say('hi world')

```

        