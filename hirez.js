const Smite = require('./src/smite/smiteAPI')
const Paladins = require('./src/paladins/paladinsAPI')

class Hirez {
  constructor (args) {
    this.devId = args.devId
    this.authKey = args.authKey
    this.smite = new Smite(this)
    this.paladins = new Paladins(this)
  }
}

module.exports = Hirez
