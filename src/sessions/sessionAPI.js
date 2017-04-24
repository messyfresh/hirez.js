// Session API Object Constructor

// Dependencies
const request = require('request')
const util = require('../util')

class SessionAPI {
  constructor (baseUrl, devId, authKey, platform) {
    this.baseUrl = baseUrl
    this.devId = devId
    this.authKey = authKey
    this.platform = platform
  }

  generate () {
    return genSession(this.baseUrl, this.devId, util.authHash(this.devId, this.authKey, 'createsession'), this.platform)
      .then((response) => {
        this.id = response.session_id
        return response.session_id
      })
      .catch(err => {
        if (err) throw err
      })
  }

  test () {
    return testSession(this.baseUrl, this.devId, this.authKey, this.platform)
      .then(response => {
        return response
      })
      .catch(err => {
        if (err) throw err
      })
  }

}

// Generate a new Session
function genSession (baseUrl, devId, authHash, platform) {
  let url = baseUrl + 'createsessionjson/' + devId + '/' +
    authHash + '/' + util.getUtcTime()
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let sessionID = JSON.parse(body)
        switch (platform) {
          case 'smitePc':
            process.env.smiteSession = sessionID
            resolve(sessionID)
            break
          case 'paladinsPc':
            process.env.paladinsSession = sessionID
            resolve(sessionID)
            break
          case 'smiteXbox':
            process.env.smiteXboxSession = sessionID
            resolve(sessionID)
            break
          case 'smitePS4':
            process.env.smitePS4Session = sessionID
            resolve(sessionID)
        }
      } else {
        reject(error)
      }
    })
  })
}

// Test Session ID
function testSession (baseUrl, devId, authKey, platform) {
  let sessionId
  switch (platform) {
    case ('smitePc'):
      sessionId = process.env.smiteSession
      break
    case ('paladinsPc'):
      sessionId = process.env.paladinsSession
      break
    case ('smiteXbox'):
      sessionId = process.env.smiteXboxSession
      break
    case ('smitePS4'):
      sessionId = process.env.smitePS4Session
  }
  let url = util.genUrl(baseUrl, 'testsession', devId, authKey, sessionId)
  console.log(url)
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

module.exports = SessionAPI
