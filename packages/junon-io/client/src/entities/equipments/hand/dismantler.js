const RangeEquipment = require("./range_equipment")
const Constants = require("./../../../../../common/constants.json")
const Protocol = require("./../../../../../common/util/protocol")

class Dismantler extends RangeEquipment {
  repositionSprite() {
    super.repositionSprite()

    this.sprite.position.x += 2

    this.user.closeHands()
  }

  getSpritePath() {
    return 'dismantler.png'
  }

  getType() {
    return Protocol.definition().BuildingType.Dismantler
  }

  getConstantsTable() {
    return "Equipments.Dismantler"
  }

}

module.exports = Dismantler
