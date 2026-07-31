const Guard = require("./guard")
const Protocol = require("./../../../common/util/protocol")
const Constants = require("./../../../common/constants.json")
const Item = require("./../item")
const Projectiles = require('../projectiles/index')

class Trooper extends Guard {
  getWeaponsList() {
    return ["Pistol", "Uzi", "ThompsonTao50", "AssaultRifle"]
  }
  
  getConstantsTable() {
    return "Mobs.Trooper"
  }

  getType() {
    return Protocol.definition().MobType.Trooper
  }
  
  canDamageWalls(){
    return false
  }

}

module.exports = Trooper