'use strict';

const wechatApi = require('./lib/wechat-api');

module.exports = agent => {
  if (agent.config.wechatApiCache.agent) wechatApi(agent);
};
