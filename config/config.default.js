'use strict';

/**
 * egg-wechat-api-cache default config
 * @member Config#wechatApi
 * @property {String} SOME_KEY - some description
 */
exports.wechatApi = {
  default: {
  },
  app: true,
  agent: false,

  // wechat
  appId: '',
  appSecret: '',
  cacheInstance: '',
};
