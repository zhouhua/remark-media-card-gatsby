# Remark Media Card Gatsby

[![npm version](https://img.shields.io/npm/v/%40zhouhua-dev%2Fremark-media-card-gatsby?style=flat&logo=npm)](https://www.npmjs.com/package/@zhouhua-dev/remark-media-card-gatsby)

[中文](./readme.md) | [English](./readme.en.md)

本插件的功能和使用方法请参考 [remark-media-card](https://github.com/zhouhua/remark-media-card)，本项目仅仅是为了兼容 gatsby 框架而进行了一层包装。

## 安装

```bash
npm install @zhouhua-dev/remark-media-card-gatsby --save-dev
```

## 使用方法

如果使用的是 gatsby-transformer-remark 插件，在 `plugins` 数组中添加本插件：

```js
// gatsby-config.js
module.exports = {
  // gatsby 配置
  plugins: [
    // 其他插件
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          '@zhouhua-dev/remark-media-card-gatsby',
          // 其他 gatsby-transformer-remark 插件
        ],
      },
    },
  ],
};
```

如果使用的是 gatsby-plugin-mdx 插件，在 `gatsbyRemarkPlugins` 中添加本插件：

```js
// gatsby-config.js
module.exports = {
  // gatsby 配置
  plugins: [
    // 其他插件
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          '@zhouhua-dev/remark-media-card-gatsby',
        ],
      },
    },
  ],
};

## demo

[blog](https://www.zhouhua.site/2024/books/)
