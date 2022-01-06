const { Trainer } = require('./trainers')
const {
  eevee,
  flareon,
  vaporeon,
  leafeon,
  charmander,
  squirtle,
  bulbasaur,
} = require('./createdPokemon')
const inquirer = require('inquirer')

class Battle {
  constructor(player_one, player_two) {
    this.trainerOne = player_one
    this.trainerTwo = player_two
  }

  fight() {
    this.pokeOne = this.trainerOne.pokeBelt['1']
    this.pokeTwo = this.trainerTwo.pokeBelt['1']

    console.log(
      `${this.trainerOne.name} releases ${this.pokeOne.name}, ${this.trainerTwo.name} releases ${this.pokeTwo.name}`,
    )

    if (this.pokeTwo.weakness === this.pokeOne.type) {
      this.pokeOne.attackDmg *= 1.25
      this.pokeTwo.attackDmg *= 0.75
    } else if (this.pokeTwo.strength === this.pokeOne.type) {
      this.pokeOne.attackDmg *= 0.75
      this.pokeTwo.attackDmg *= 1.25
    }

    if (this.pokeTwo.hitPoints > 0) {
      this.pokeTwo.hitPoints -= Math.round(this.pokeOne.attackDmg)
      console.log(`${this.pokeOne.name} used ${this.pokeOne.moves}`)

      console.log(
        `${this.pokeTwo.name} has ${this.pokeTwo.hitPoints} hp remaining!`,
      )
    } else if (this.pokeTwo.hitPoints <= 0) {
      this.pokeTwo.hitPoints = 0
      console.log(
        `Oh no! ${this.pokeTwo.name} fainted! ${this.trainerOne.name} wins!`,
      )
    }

    if (this.pokeOne.hitPoints > 0) {
      this.pokeOne.hitPoints -= Math.round(this.pokeTwo.attackDmg)
      console.log(`${this.pokeTwo.name} used ${this.pokeTwo.moves}`)
      console.log(
        `${this.pokeOne.name} has ${this.pokeOne.hitPoints} hp remaining!`,
      )
    } else if (this.pokeOne.hitPoints <= 0) {
      this.pokeOne.hitPoints = 0
      console.log(
        `Oh no! ${this.pokeOne.name} fainted! ${this.trainerTwo.name} wins!`,
      )
    }
  }
}

module.exports = Battle
