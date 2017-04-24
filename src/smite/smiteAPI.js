// Smite Data API Methods

// Dependencies
const request = require('request')
const util = require('../util')
const SessionAPI = require('../sessions/sessionAPI')

class Smite {
  constructor (args) {
    this.devId = args.devId
    this.authKey = args.authKey
    this.smiteUrl = 'http://api.smitegame.com/smiteapi.svc/'
    this.session = new SessionAPI(this.smiteUrl, this.devId, this.authKey, 'smitePc')
  }

  getFriends (userName) {
    let url = util.genUrl(this.smiteUrl, 'getfriends', this.devId, this.authKey, process.env.smiteSession) + '/' + userName
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

  getEsportsProLeagueDetails () {
    let url = util.genUrl(this.smiteUrl, 'getesportsproleaguedetails', this.devId, this.authKey, process.env.smiteSession)
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

  getGodRanks (userName) {
    let url = util.genUrl(this.smiteUrl, 'getgodranks', this.devId, this.authKey, process.env.smiteSession) + '/' + userName
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

  getGods () {
    let url = util.genUrl(this.smiteUrl, 'getgods', this.devId, this.authKey, process.env.smiteSession) + '/1'
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

  getGodSkins (godId) {
    let url = util.genUrl(this.smiteUrl, 'getgodskins', this.devId, this.authKey, process.env.smiteSession) + '/' + godId + '/1'
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

  getGodRecommendedItems (godId) {
    let url = util.genUrl(this.smiteUrl, 'getgodrecommendeditems', this.devId, this.authKey, process.env.smiteSession) + '/' + godId + '/1'
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
    let url = util.genUrl(this.smiteUrl, 'getitems', this.devId, this.authKey, process.env.smiteSession) + '/1'
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
  let url = util.genUrl(this.smiteUrl, 'getmatchdetails', this.devId, this.authKey, process.env.smiteSession) + '/' + matchId
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

  getMatchPlayerDetails (matchId) {
    let url = util.genUrl(this.smiteUrl, 'getmatchplayerdetails', this.devId, this.authKey, process.env.smiteSession) + '/' + matchId
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

  getMatchIdsByQueue (queue, date, time) {
    let url = util.genUrl(this.smiteUrl, 'getmatchidsbyqueue', this.devId, this.authKey, process.env.smiteSession) + '/' + queue +
      '/' + date + '/' + time
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

  getLeagueLeaderBoard (queue, tier, season) {
  let url = util.genUrl(this.smiteUrl, 'getleagueleaderboard', this.devId, this.authKey, process.env.smiteSession) + '/' + queue +
    '/' + tier + '/' + season
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

  getLeagueSeasons (queue) {
  let url = util.genUrl(this.smiteUrl, 'getleagueseasons', this.devId, this.authKey, process.env.smiteSession) + '/' + queue
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
  let url = util.genUrl(this.smiteUrl, 'getmatchhistory', this.devId, this.authKey, process.env.smiteSession) + '/' + userName
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

  getMotd () {
    let url = util.genUrl(this.smiteUrl, 'getmotd', this.devId, this.authKey, process.env.smiteSession)
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
    let url = util.genUrl(this.smiteUrl, 'getplayer', this.devId, this.authKey, process.env.smiteSession) + '/' + userName
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
    let url = util.genUrl(this.smiteUrl, 'getplayerstatus', this.devId, this.authKey, process.env.smiteSession) + '/' + userName
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

  getQueueStats (userName, queue) {
    let url = util.genUrl(this.smiteUrl, 'getqueuestats', this.devId, this.authKey, process.env.smiteSession) + '/' + userName +
      '/' + queue
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

  getTeamDetails (teamId) {
    let url = util.genUrl(this.smiteUrl, 'getteamdetails', this.devId, this.authKey, process.env.smiteSession) + '/' + teamId
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

  getTeamPlayers (teamId) {
    let url = util.genUrl(this.smiteUrl, 'getteamplayers', this.devId, this.authKey, process.env.smiteSession) + '/' + teamId
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

  getTopMatches () {
    let url = util.genUrl(this.smiteUrl, 'gettopmatches', this.devId, this.authKey, process.env.smiteSession)
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

  searchTeams (teamName) {
    let url = util.genUrl(this.smiteUrl, 'searchteams', this.devId, this.authKey, process.env.smiteSession) + '/' + encodeURIComponent(teamName)
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
    let url = util.genUrl(this.smiteUrl, 'getplayerachievements', this.devId, this.authKey, process.env.smiteSession) + '/' + userId
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
    let url = util.genUrl(this.smiteUrl, 'getpatchinfo', this.devId, this.authKey, process.env.smiteSession)
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
    let url = this.smiteUrl + 'pingjson'
    return new Promise ((resolve, reject) => {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve (JSON.parse(body))
        } else {
          reject (console.error(body))
        }
      })
    })
  }

  getDataUsed () {
    let url = util.genUrl(this.smiteUrl, 'getdataused', this.devId, this.authKey, process.env.smiteSession)
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

module.exports = Smite