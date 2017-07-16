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

  exitsts () {
    let sessionId;
    switch (this.platform) {
      case ('smitePC'):
        sessionId = process.env.SMITE_PC_SESSION
        break
      case ('smiteXBOX'):
        sessionId = process.env.SMITE_XBOX_SESSION
        break
      case ('smitePS4'):
        sessionId = process.env.SMITE_PS4_SESSION
        break
      case ('paladinsPC'):
        sessionId = process.env.PALADINS_PC_SESSION
        break
      case ('paladinsXBOX'):
        sessionId = process.env.PALADINS_XBOX_SESSION
        break
      case ('paladinsPS4'):
        sessionId = process.env.PALADINS_PS4_SESSION
    }
    return (sessionId !== undefined);
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
          case 'smitePC':
            process.env.SMITE_PC_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'smiteXBOX':
            process.env.SMITE_XBOX_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'smitePS4':
            process.env.SMITE_PS4_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'paladinsPC':
            process.env.PALADINS_PC_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'paladinsXBOX':
            process.env.PALADINS_XBOX_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'paladinsPS4':
            process.env.PALADINS_PS4_SESSION = sessionID.session_id
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
    case ('smitePC'):
      sessionId = process.env.SMITE_PC_SESSION
      break
    case ('smiteXBOX'):
      sessionId = process.env.SMITE_XBOX_SESSION
      break
    case ('smitePS4'):
      sessionId = process.env.SMITE_PS4_SESSION
      break
    case ('paladinsPC'):
      sessionId = process.env.PALADINS_PC_SESSION
      break
    case ('paladinsXBOX'):
      sessionId = process.env.PALADINS_XBOX_SESSION
      break
    case ('paladinsPS4'):
      sessionId = process.env.PALADINS_PS4_SESSION
  }
  let url = util.genUrl(baseUrl, 'testsession', devId, authKey, sessionId)
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
