const MeleeEquipment = require("./melee_equipment")
const Constants = require("./../../../../../common/constants.json")
const Protocol = require("./../../../../../common/util/protocol")

class Hammer extends MeleeEquipment {

  shouldNotInteractBuildings() {
    return false
  }

  getSpritePath() {
    return 'hammer.png'
  }

  getType() {
    return Protocol.definition().BuildingType.Hammer
  }

  getConstantsTable() {
    return "Equipments.Hammer"
  }

}

module.exports = Hammer
