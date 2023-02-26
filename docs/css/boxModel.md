# 盒模型

![CSS盒模型的概念](../images/box-model.jpg)

## 盒子模型复习

盒模型有两种，除了经常见到的标准盒模型之外，还有怪异盒模型（IE 怪异模式）。**二者的区别是 content 的大小不同。**

- **标准盒模型**大小=contentWidth(宽高)+padding+border+margin
- **怪异盒模型**大小=宽高=contentWidth+margin (contentWidth=padding+border)

也就是说，在标准盒模型中，增加 padding 等属性后，盒模型会外扩；而怪异盒模型中，则不会外扩，但 content 区域会内缩。

## 怎样自由选择采用哪种盒模型？

通过 box-sizing 属性

|         标准盒模型         |    怪异盒模型     |
| :------------------------: | :---------------: |
| content-box 属性值（默认） | border-box 属性值 |

> 备注： margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到 margin。

参考链接 1：[css 盒模型](https://mp.weixin.qq.com/s?__biz=MjM5MDA2MTI1MA==&mid=2649093824&idx=3&sn=b9b70526eb6c5780e712b5d9da27492d&chksm=be5bd16d892c587b8e36fdc5c5796f16b35cbe025d1a3cad7df9815a893dcef12895bed63050&scene=27)

参考链接 2：[玩转盒模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E7%8E%A9%E8%BD%AC%E7%9B%92%E6%A8%A1%E5%9E%8B)
