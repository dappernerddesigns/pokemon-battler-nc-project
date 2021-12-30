class Pokemon {
  constructor(name, hitPoints, attackDmg, sound, moves) {
    this.name = name
    this.hitPoints = hitPoints
    this.attackDmg = attackDmg
    this.sound = sound
    this.moves = moves
    this.type = 'Normal'
  }

  talk() {
    return this.sound
  }

  useYourMoves() {
    return this.moves
  }
}

class FireType extends Pokemon {
  constructor(name, hitPoints, attackDmg, sound, moves) {
    super(name, hitPoints, attackDmg, sound, moves)
    this.type = 'Fire'
    this.strength = 'Grass'
    this.weakness = 'Water'
  }
}

class GrassType extends Pokemon {
  constructor(name, hitPoints, attackDmg, sound, moves) {
    super(name, hitPoints, attackDmg, sound, moves)
    this.type = 'Grass'
    this.strength = 'Water'
    this.weakness = 'Fire'
  }
}

class WaterType extends Pokemon {
  constructor(name, hitPoints, attackDmg, sound, moves) {
    super(name, hitPoints, attackDmg, sound, moves)
    this.type = 'Water'
    this.strength = 'Fire'
    this.weakness = 'Grass'
  }
}

module.exports = { Pokemon, FireType, GrassType, WaterType }
