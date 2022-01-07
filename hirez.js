const Smite = require('./src/smite/smiteAPI')
const Paladins = require('./src/paladins/paladinsAPI')
const Realm = require('./src/realm/realmAPI')

class Hirez {
  constructor (args) {
    this.devId = args.devId
    this.authKey = args.authKey
  }

  smite (platform) {
    return new Smite(this, platform)
  }

  paladins (platform) {
    return new Paladins(this, platform)
  }

  realm (platform) {
    return new Realm(this, platform)
  }
}

module.exports = Hirez
