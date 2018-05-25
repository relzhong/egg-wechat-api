'use strict';

const assert = require('assert');
const WechatApi = require('co-wechat-api');

module.exports = app => {

  let cache = app.cache;
  const { appId, appSecret, cacheInstance } = app.config.wechatApi || {};

  // select redis instance
  if (cacheInstance) {
    cache = app.cache.store(cacheInstance);
  }

  // check key & secret
  assert(appId && appSecret,
    '[egg-wechat-api] Must set `appId` and `appSecret` in wechat-api\'s config');

  // persistence methods
  async function getTicketToken(type) {
    try {
      const raw = await cache.get(`wechat_${type}`);
      return JSON.parse(raw);
    } catch (error) {
      throw (error);
    }
  }

  async function saveTicketToken(type, _ticketToken) {
    try {
      await cache.set(`wechat_${type}`, JSON.stringify(_ticketToken));
    } catch (error) {
      throw (error);
    }
  }

  async function getAccessToken() {
    try {
      const raw = await cache.get('wechat_access_token');
      return JSON.parse(raw);
    } catch (error) {
      throw (error);
    }
  }

  async function saveAccessToken(token) {
    try {
      await cache.set('wechat_access_token', JSON.stringify(token));
    } catch (error) {
      throw (error);
    }
  }

  app.coreLogger.info('[egg-wechat-api-cache]', 'setup');

  const api = new WechatApi(appId, appSecret, getAccessToken, saveAccessToken);
  api.registerTicketHandle(getTicketToken, saveTicketToken);
  app.wechatApi = api;

};
