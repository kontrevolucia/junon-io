const HandEquipment = require("./hand_equipment")
const Projectiles = require("./../../projectiles/index")

const Protocol = require('../../../../common/util/protocol')
const Constants = require("./../../../../common/constants.json")


class Scar17 extends HandEquipment {

  use(user, targetEntity) {
    if (!user.hasInfiniteAmmo()) {
      const ammoType = this.getAmmoType()
      const ammo = user.inventory.search(ammoType)
      if (!ammo) {
        user.showError("RifleAmmo Required")
        return false
      }

      ammo.reduceCount(1)
    }

    super.use(user, targetEntity)

    let sourcePoint = user.game.pointFromDistance(user.getX(), user.getY(), Constants.tileSize * 3 + 20, user.getRadAngle())

    let angleInRad = user.getRadAngle()
    let angleRandomizer = 2 - Math.floor(Math.random() * 5)
    angleInRad = angleInRad + (angleRandomizer * Math.PI / 180)

    Projectiles.RifleBullet.build({
      weapon:        this,
      source:      { x: sourcePoint[0],         y: sourcePoint[1] },
      destination: user.getShootTarget(this, angleInRad)
    })

    return true
  }

  getConstantsTable() {
    return "Equipments.Scar17"
  }

  getAmmoType() {
    return Protocol.definition().BuildingType.RifleAmmo
  }

  getType() {
    return Protocol.definition().BuildingType.Scar17
  }
}

module.exports = Scar17
