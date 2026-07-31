const BoltActionRifle = require("./bolt_action_rifle")
const Constants = require("./../../../../../common/constants.json")
const Protocol = require("./../../../../../common/util/protocol")

class ThompsonTao50 extends BoltActionRifle {

  getSpritePath() {
    return 'thompson_tao50.png'
  }

  getType() {
    return Protocol.definition().BuildingType.ThompsonTao50
  }

  getConstantsTable() {
    return "Equipments.ThompsonTao50"
  }

}

module.exports = ThompsonTao50
