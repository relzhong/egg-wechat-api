# egg-wechat-api-cache

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/egg-wechat-api-cache.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-wechat-api-cache

<!--
Description here.
-->

egg plugin for [wechat-api](https://github.com/node-webot/co-wechat-api)

## Install

```bash
$ npm i egg-wechat-api-cache --save
```
### use a inmemory cache see [node-cache-manager](https://github.com/BryanDonovan/node-cache-manager) for more cache engine

```bash
$ npm i cache-manager-memory-store --save 
```

## Prerequisite

Node.js >= 8.x

## Usage

- [co-wechat-api](https://github.com/node-webot/co-wechat-api)

## Dependencies

- egg
	- [egg-cache](https://github.com/hexindai/egg-cache)
- other
	- [co-wechat-api](https://github.com/node-webot/co-wechat-api)

## Configuration

```js
// {app_root}/config/plugin.js
exports.wechatApiCache = {
  enable: true,
  package: 'egg-wechat-api-cache',
};
```
> use egg-cache default store

```js
// {app_root}/config/config.default.js
exports.wechatApi = {  
  appId: '',
  appSecret: '',
};
```
> select egg-cache store.

```js
// {app_root}/config/config.default.js
exports.wechatApi = {
  appId: '',
  appSecret: '',
  cacheInstance: '', // select store of egg-cache
};
```

> egg-cache is required !__

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

```
'use strict';

module.exports = app => {

  app.get('/', function* () {

    const { wechatApi } = app;

    try {
      const ticket = yield wechatApi.getTicket();
      this.status = 200;
      this.body = ticket;

    } catch (error) {
      this.status = 500;
      this.body = error;
    }
  });

};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/relzhong/egg-wechat-api-cache/issues).

## License

[MIT](LICENSE)
