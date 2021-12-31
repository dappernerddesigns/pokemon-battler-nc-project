class Trainer {
  constructor(name) {
    this.name = name
    this.pokeBelt = {}
    this.slots = 6
    this.storage = 0
    this.speed = Math.floor(Math.random() * 21)
  }

  catch(pokemon) {
    this.storage += 1
    if (this.storage > 6) {
      this.storage -= 1
      return 'All slots on the PokeBelt are full!'
    }
    this.pokeBelt[this.storage] = pokemon
  }
}

module.exports = { Trainer }
