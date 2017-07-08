const Smite = require('./src/smite/smiteAPI')
const Paladins = require('./src/paladins/paladinsAPI')

class Hirez {
  constructor (args) {
    this.devId = args.devId
    this.authKey = args.authKey
  }

  smite (platform) {
    let self = this
    self.platform = platform
    return new Smite(self)
  }

  paladins (platform) {
    let self = this
    self.platform = platform
    return new Paladins(self)
  }
}

module.exports = Hirez
