# flex布局（弹性布局）

## 基本概念

flex容器 (.container) 

flex项目 (.item)

主轴

交叉轴



### flex容器属性

```
    .container{
        display:flex; // 执行为flex布局
        flex-direction:row|row-reverse|column|column-reverse; // 设置主轴方向(flex项目排列方向),默认row
        flex-wrap:nowrap|wrap|wrap-reverse; // 一行放不下时，flex项目如何排列
        flex-flow:row nowrap; // 是flex-direction和flex-wrap的缩写
        justify-content:flex-start|flex-end|center|space-between|space-around // flex项目在主轴的对齐方式
        align-items:flex-start|flex-end|center|baseline|stretch // flex项目在交叉轴的对齐方式
        align-content:flex-start|flex-end|center|space-between|space-around|stretch; // 定义了多个交叉轴的对齐方式
    }
```

### flex项目属性

```
    .item{
        order:0; // flex项目排列顺序
        flex-grow:0; //flex项目放大比例
        flex-shrink:1; //flex项目缩小比例
        flex-basis:auto; //分配多余空间之前，flex项目占主轴的空间
        flex:0 1 auto; // flex-grow flex-shrink flex-basis 的缩写
        align-self:auto|flex-start|flex-end|center|baseline|stretch //flex项目对齐方式 flex容器设置了align-items,align-self默认值auto；flex容器未设置了align-items,align-self等同于stretch
    }
``` 

### 用flex实现的布局方式

骰子布局
网格布局
圣杯布局
输入框布局
悬挂式布局
固定底栏
流式布局

[参考资料1](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
[参考资料2](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
[参考资料3](http://www.ruanyifeng.com/blog/2018/10/flexbox-form.html)