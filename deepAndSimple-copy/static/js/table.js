// 默认样式颜色
var defaults={
    head:'blue',
    content:'white',
    hover:'orange'
}

// 自定义插件
// $.fn.extend({
//     bgColor:function(option) {
//         // 通过$.extend，后面的相同属性值会覆盖前面属性值的特点更换样式颜色属性
//         $.extend(defaults,option);
//         // return的原因是上该实例方法支持链编程，好比Stringbuffer
//         // this：指的是插件本身，可以看成一个jQuery的实例
//         return this.each(function() {
//             // 给默认值，this：当前元素
//             // $()有2个参数，一个是选择器，一个是作用域;通常意义下的$('xxxx')其实是默认了第二个作用域,完整说应该是$('xxxx',document)
//             $("tr:eq(0)",this).addClass(defaults.head);
//             $("tr:gt(0)",this).addClass(defaults.content);
//             // 添加动态效果
//             $("tr:gt(0)",this).hover(function(){
//                 $(this).removeClass().addClass(defaults.hover);
//             },function(){
//                 $(this).removeClass().addClass(defaults.content);
//             });
                
//         })
//     }
// })

$.fn.light=function(option){
    $.extend(defaults,option);
    $('tr:eq(0)',this).addClass(defaults.head);
    $('tr:gt(0)',this).addClass(defaults.content);
    $('tr:gt(0)',this).hover(function(){
        $(this).removeClass().addClass(defaults.hover);
    },function(){
        $(this).removeClass().addClass(defaults.content);
    })
    return this;
}