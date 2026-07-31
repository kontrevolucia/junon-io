const BoltActionRifle = require("./bolt_action_rifle")
const Projectiles = require("./../../projectiles/index")

const Protocol = require('../../../../common/util/protocol')
const Constants = require("./../../../../common/constants.json")


class ThompsonTao50 extends BoltActionRifle {
  getProjectileType() {
    return Projectiles.RifleBullet
  }

  getConstantsTable() {
    return "Equipments.ThompsonTao50"
  }

  getType() {
    return Protocol.definition().BuildingType.ThompsonTao50
  }
}

module.exports = ThompsonTao50
