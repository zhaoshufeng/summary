# jquery选择器汇总

### 1.基本选择器

$("#id")            //ID选择器

$("div")            //元素选择器

$(".classname")     //类选择器

$(".classname,.classname1,#id1")     //组合选择器


### 2.层次选择器

 $("#id>.classname ")    //子元素选择器
 
$("#id .classname ")    //后代元素选择器

$("#id + .classname ")    //紧邻下一个元素选择器

$("#id ~ .classname ")    //兄弟元素选择器


### 3.过滤选择器(重点)

$("li:first")    //第一个li

$("li:last")     //最后一个li

$("li:even")     //挑选下标为偶数的li

$("li:odd")      //挑选下标为奇数的li

$("li:eq(4)")    //下标等于 4 的li(第五个 li 元素)

$("li:gt(2)")    //下标大于 2 的li

$("li:lt(2)")    //下标小于 2 的li

$("li:not(#runoob)") //挑选除 id="runoob" 以外的所有li


#### 3.2 内容过滤选择器

$("div:contains('Runob')")    // 包含 Runob文本的元素

$("td:empty")                 //不包含子元素或者文本的空元素

$("div:has(selector)")        //含有选择器所匹配的元素

$("td:parent")                //含有子元素或者文本的元素


#### 3.3 可见性过滤选择器

$("li:hidden")       //匹配所有不可见元素，或type为hidden的元素

$("li:visible")      //匹配所有可见元素


#### 3.4 属性过滤选择器

$("div[id]")        //所有含有 id 属性的 div 元素

$("div[id='123']")        // id属性值为123的div 元素

$("div[id!='123']")        // id属性值不等于123的div 元素

$("div[id^='qq']")        // id属性值以qq开头的div 元素

$("div[id$='zz']")        // id属性值以zz结尾的div 元素

$("div[id*='bb']")        // id属性值包含bb的div 元素

$("input[id][name$='man']") //多属性选过滤，同时满足两个属性的条件的元素


#### 3.5 状态过滤选择器

$("input:enabled")    // 匹配可用的 input

$("input:disabled")   // 匹配不可用的 input

$("input:checked")    // 匹配选中的 input

$("option:selected")  // 匹配选中的 option


### 4.表单选择器

$(":input")      //匹配所有 input, textarea, select 和 button 元素

$(":text")       //所有的单行文本框，$(":text") 等价于$("[type=text]")，推荐使用$("input:text")效率更高，下同

$(":password")   //所有密码框

$(":radio")      //所有单选按钮

$(":checkbox")   //所有复选框

$(":submit")     //所有提交按钮

$(":reset")      //所有重置按钮

$(":button")     //所有button按钮

$(":file")       //所有文件域

