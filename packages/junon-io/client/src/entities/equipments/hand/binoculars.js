const MeleeEquipment = require("./melee_equipment")
const Constants = require("../../../../../common/constants.json")
const Protocol = require("../../../../../common/util/protocol")

class Binoculars extends MeleeEquipment {
  repositionSprite() {
    super.repositionSprite()
    
    this.sprite.position.x = 70

    this.user.closeHands()


  }

  getSpritePath() {
    return 'binoculars.png'
  }

  getType() {
    return Protocol.definition().BuildingType.Binoculars
  }

  getConstantsTable() {
    return "Equipments.Binoculars"
  }

}

module.exports = Binoculars
