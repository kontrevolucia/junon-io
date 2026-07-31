const MeleeEquipment = require("./melee_equipment")
const Constants = require("../../../../common/constants.json")
const Protocol = require('../../../../common/util/protocol')

class Binoculars extends MeleeEquipment {
  use(player, targetEntity) {
  }

  getConstantsTable() {
    return "Equipments.Binoculars"
  }

  getType() {
    return Protocol.definition().BuildingType.Binoculars
  }
}

module.exports = Binoculars
