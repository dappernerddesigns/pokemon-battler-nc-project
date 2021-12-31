const { Trainer } = require('./trainers')
const { Pokemon, FireType, WaterType, GrassType } = require('./pokemon.js')

class Battle {
  constructor(player_one, player_two, pokeOne, pokeTwo) {
    this.trainerOne = player_one
    this.trainerTwo = player_two
    this.trainerOne.catch(pokeOne)
    this.trainerTwo.catch(pokeTwo)
  }
  fight() {
    if (this.trainerOne.speed > this.trainerTwo.speed) {
      let turnOne = this.trainerOne
      let turnTwo = this.trainerTwo
    } else {
      let turnOne = this.trainerTwo
      let turnTwo = this.trainerOne
    }
  }
}

module.exports = Battle
