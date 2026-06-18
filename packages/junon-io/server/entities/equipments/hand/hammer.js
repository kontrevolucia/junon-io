const MeleeEquipment = require("./melee_equipment")

const Protocol = require('../../../../common/util/protocol')
const Constants = require("./../../../../common/constants.json")
const ExceptionReporter = require('junon-common/exception_reporter')


class Hammer extends MeleeEquipment {
  use(player, targetEntity) {
    if (this.canSalvage(player, targetEntity))  {
      targetEntity.breakBuilding(player)
      super.use(player, targetEntity, { skipAttack: true, shouldAnimate: true })
    } else {
      // use as melee weapon
      super.use(player, targetEntity)
    }

  }
  
  useOnTarget(user, target) {
    super.useOnTarget(user, target)
    target.addStun()

    return true
  }

  canSalvage(player, targetEntity) {
    let isBuilding = targetEntity && targetEntity.isBuilding()
    if (!isBuilding) return false

    let hasOwner = targetEntity.owner
    if (!hasOwner) return false

    if (targetEntity.hasCategory("storage") &&
        !player.canAccessStorage(targetEntity)) {
      return false
    }

    let regionBuildPermission = player.getRegionBuildPermission(targetEntity.getX(),
                                                                targetEntity.getY(),
                                                                targetEntity.getRotatedWidth(),
                                                                targetEntity.getRotatedHeight())
    let byPassRoleBuildPermission
    if (regionBuildPermission) {
      if (!player.canBuildInRegion(regionBuildPermission)) {
        return false
      }

      byPassRoleBuildPermission = true
    }


    if (!byPassRoleBuildPermission && player.getRole() && !player.getRole().isAllowedTo("Deconstruct")) {
      return false
    }

    return targetEntity.canBeSalvagedBy(player)
  }

  getType() {
    return Protocol.definition().BuildingType.Hammer
  }

  isMiningEquipment() {
    return true
  }

  getConstantsTable() {
    return "Equipments.Hammer"
  }
}

module.exports = Hammer
