// Realm API Constructor (adapted based on paladinsAPI.js)

// Dependencies
const request = require('request')
const util = require('../util')
const SessionAPI = require('../sessions/sessionAPI')

const API = {
  PC: 'https://api.realmroyale.com/realmapi.svc/',
  XBOX: 'https://api.realmroyale.com/realmapi.svc/',
  PS4: 'https://api.realmroyale.com/realmapi.svc/'
}

class Realm {
  constructor (args, platform) {
    this.devId = args.devId
    this.authKey = args.authKey
    this.realmUrl = API[platform.toUpperCase()]
    this.platform = platform.toUpperCase()
    this.session = new SessionAPI(this.realmUrl, this.devId, this.authKey, `realm${this.platform}`)
    this.session.test().then(tested => {
      if (tested.startsWith('Invalid session id.') || !this.session.exitsts()) {
        this.session.generate()
      }
    })
  }

  getPlayerMatchHistory (userID) {
    let url = util.genUrl(this.realmUrl, 'GetPlayerMatchHistory', this.devId, this.authKey, process.env[`REALM_${this.platform}_SESSION`]) + '/' + userID
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  SearchPlayers (userName) {
    let url = util.genUrl(this.realmUrl, 'SearchPlayers', this.devId, this.authKey, process.env[`REALM_${this.platform}_SESSION`]) + '/' + userName
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

}

module.exports = Realm
