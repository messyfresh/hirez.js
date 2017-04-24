// Helpers for Smite API Methods

// Dependencies
const Moment = require('moment')
const md5 = require('md5')
const baseUrl = 'http://api.smitegame.com/smiteapi.svc/'


function getUtcTime () {
  return new Moment().utc().format('YYYYMMDDHHmmss')
}

function authHash (devId, authKey, method) {
  return md5(devId + method + authKey + getUtcTime())
}

function genUrl (baseUrl, method, devId, authKey, sessionId) {
  return baseUrl + method + 'json/' + devId + '/' +
    authHash(devId, authKey, method) + '/' + sessionId + '/' + getUtcTime()
}

module.exports.getUtcTime = getUtcTime
module.exports.authHash = authHash
module.exports.genUrl = genUrl
