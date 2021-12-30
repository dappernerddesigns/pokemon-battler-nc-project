const { normalize } = require('path/posix')

class Pokemon {
  constructor(
    name,
    hitPoints,
    attackDmg,
    sound,
    moves,
    type,
    strength,
    weakness,
  ) {
    this.name = name
    this.hitPoints = hitPoints
    this.attackDmg = attackDmg
    this.sound = sound
    this.moves = moves
    this.type = type || 'Normal'
    this.strength = strength
    this.weakness = weakness
  }

  talk() {
    return this.sound
  }
}

module.exports = Pokemon
