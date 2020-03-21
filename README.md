# egg-webpack-assets

## 开启插件

```js
// {app_root}/config/plugin.js
exports.webpackAssets = {
  enable: true,
  package: '@tencent/egg-webpack-assets',
};
```

## 使用场景

`webpack AssetsPlugin` 插件生成的json文件，在 `egg` 框架视图层直接使用 `assets` 变量。

例如：
```html
// xx.html
{% if assets['vendor'] and assets['vendor'].css %}<link href="{{ assets['vendor'].css}}" rel="stylesheet">{% endif %}
```

## 详细配置

```js
// {app_root}/config/config.default.js
'use strict';
const path = require('path');

module.exports = appInfo => {
  return {
    webpackAssets: {
      file: path.join(appInfo.baseDir, 'app', 'assets.json'), // webpack AssetsPlugin插件生成的json文件路径
    },
  };
};
```

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## License

[MIT](LICENSE)
