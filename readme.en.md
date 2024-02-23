# Remark Media Card Gatsby

[![npm version](https://img.shields.io/npm/v/%40zhouhua-dev%2Fremark-media-card-gatsby?style=flat&logo=npm)](https://www.npmjs.com/package/@zhouhua-dev/remark-media-card-gatsby)

[中文](./readme.md) | [English](./readme.en.md)

Please refer to [remark-media-card](https://github.com/zhouhua/remark-media-card) for the functionality and usage of this plugin. This project is just a wrapper designed to be compatible with the Gatsby framework.


## Installation

```bash
npm install @zhouhua-dev/remark-media-card-gatsby --save-dev
```

## Usage

If you are using the gatsby-transformer-remark plugin, add this plugin to the `plugins` array:

```js
// gatsby-config.js
module.exports = {
  // Gatsby configuration
  plugins: [
    // Other plugins
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          '@zhouhua-dev/remark-media-card-gatsby',
          // Other gatsby-transformer-remark plugins
        ],
      },
    },
  ],
};
```

If you are using the gatsby-plugin-mdx plugin, add this plugin to `gatsbyRemarkPlugins`:

```js
// gatsby-config.js
module.exports = {
  // Gatsby configuration
  plugins: [
    // Other plugins
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
