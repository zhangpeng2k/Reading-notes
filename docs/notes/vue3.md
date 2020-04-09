# Vue3 (alpha) 预习

在本篇笔记中，我记录并学习 `Vue3` 的新语法，以及使用 `Vue3` 尝试做一个简单的 TodoList 应用。

## 前言

本来 Evan you 说2019年就要发布 `Vue3` 的正式版。然鹅新冠病毒肺炎`COVID-19`的突然出现，好像给了大家一个咕咕咕的理由...

### 先说体验结果

除了把`Object.definedProperty`替换为`Proxy`，带来的对象属性监听能力以外，并没有什么很香的地方。

确实解决了对象属性监听这个问题，以及在某些情况下更好的性能优化。但新功能太过于像 `React` 以至于我体验了 `Vue3` 之后打算去好好学学 `React` 了...

其他更强大的新功能也带来了更自由的写法，我认为在 `Vue3` 上线后，仍然会有公司选择 `Vue2` 或者更新到 `Vue3` 接着使用 `Vue2` 写法。

因为更自由的写法，也带来了更高的沟通成本，以后一样需要和 `React` 一样，使用`TypeScirt`和`eslint`，或协作文档等等来解决代码风格问题。

## 克隆官方仓库

克隆官方预览仓库`vue-next-webpack-preview`

```sh
git clone https://github.com/vuejs/vue-next-webpack-preview.git

cd vue-next-webpack-preview

npm i

npm run dev
```

待更新