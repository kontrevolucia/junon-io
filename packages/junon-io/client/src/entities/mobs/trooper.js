const Guard = require('./guard')
const LandMob = require('./land_mob')
const Constants = require("./../../../../common/constants.json")
const Protocol = require("./../../../../common/util/protocol")

class Trooper extends Guard {

  getConstantsTable() {
    return "Mobs.Trooper"
  }

  getType() {
    return Protocol.definition().MobType.Trooper
  }
}

module.exports = Trooper
