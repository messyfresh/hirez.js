// Paladins API Constructor

// Dependencies
const request = require('request')
const util = require('../util')
const SessionAPI = require('../sessions/sessionAPI')

class Paladins {
  constructor (args) {
    this.devId = args.devId
    this.authKey = args.authKey
    this.paladinsUrl = 'http://api.paladins.com/paladinsapi.svc/'
    this.session = new SessionAPI(this.paladinsUrl, this.devId, this.authKey, 'paladinsPc')
  }

  getFriends (userName) {
    let url = util.genUrl(this.paladinsUrl, 'getfriends', this.devId, this.authKey, process.env.paladinsSession) + '/' + userName
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

  getChampionRanks (userName) {
    let url = util.genUrl(this.paladinsUrl, 'getchampionranks', this.devId, this.authKey, process.env.paladinsSession) + '/' + userName
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

  getChampions () {
    let url = util.genUrl(this.paladinsUrl, 'getchampions', this.devId, this.authKey, process.env.paladinsSession) + '/1'
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

  getChampionSkins (godId) {
    let url = util.genUrl(this.paladinsUrl, 'getchampionskins', this.devId, this.authKey, process.env.paladinsSession) + '/' + godId + '/1'
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

  getItems () {
    let url = util.genUrl(this.paladinsUrl, 'getitems', this.devId, this.authKey, process.env.paladinsSession) + '/1'
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

  getMatchDetails (matchId) {
    let url = util.genUrl(this.paladinsUrl, 'getmatchdetails', this.devId, this.authKey, process.env.paladinsSession) + '/' + matchId
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

  getMatchHistory (userName) {
    let url = util.genUrl(this.paladinsUrl, 'getmatchhistory', this.devId, this.authKey, process.env.paladinsSession) + '/' + userName
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

  getPlayer (userName) {
    let url = util.genUrl(this.paladinsUrl, 'getplayer', this.devId, this.authKey, process.env.paladinsSession) + '/' + userName
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

  getPlayerAchievements (userId) {
    let url = util.genUrl(this.paladinsUrl, 'getplayerachievements', this.devId, this.authKey, process.env.paladinsSession) + '/' + userId
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

  getPlayerStatus (userName) {
    let url = util.genUrl(this.paladinsUrl, 'getplayerstatus', this.devId, this.authKey, process.env.paladinsSession) + '/' + userName
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

  getPatchInfo () {
    let url = util.genUrl(this.paladinsUrl, 'getpatchinfo', this.devId, this.authKey, process.env.paladinsSession)
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

  ping () {
    let url = this.paladinsUrl + 'pingjson'
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(console.error(body))
        }
      })
    })
  }

  getDataUsed () {
    let url = util.genUrl(this.paladinsUrl, 'getdataused', this.devId, this.authKey, process.env.smiteSession)
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

module.exports = Paladins
