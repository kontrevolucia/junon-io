const BaseStatus = require("./base_status")

class StunStatus extends BaseStatus {
  getStatusName() {
    return "stun"
  }
}

module.exports = StunStatus
