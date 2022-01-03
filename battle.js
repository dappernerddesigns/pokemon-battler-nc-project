const { Trainer } = require('./trainers')
const { Pokemon, FireType, WaterType, GrassType } = require('./pokemon.js')

class Battle {
  constructor(player_one, player_two) {
    this.trainerOne = player_one
    this.trainerTwo = player_two
  }

  fight() {
    let attacker = this.trainerOne.storage[0]
    let defender = this.trainerTwo.storage[0]

    console.log(
      `${this.trainerOne.name} releases ${attacker.name}, ${this.trainerTwo} releases ${defender.name}`,
    )

    if (defender.weakness === attacker.type) {
      attacker.attackDmg * 1.25
    } else if (defender.strength === attacker.type) {
      attacker.attackDmg * 0.75
    }

    defender.hitPoints -= attacker.attackDmg
  }
}

module.exports = Battle
