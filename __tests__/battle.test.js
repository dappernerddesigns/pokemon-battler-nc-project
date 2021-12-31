const { Trainer } = require('../trainers')
const {
  eevee,
  flareon,
  vaporeon,
  leafeon,
  charmander,
  squirtle,
  bulbasaur,
} = require('../createdPokemon')
const Battle = require('../battle')

describe('Battle', () => {
  test('Battle class returns two trainers and their chosen Pokemon', () => {
    const playerOne = new Trainer('Red')
    const playerTwo = new Trainer('Blue')

    let testBattle = new Battle(playerOne, playerTwo, charmander, bulbasaur)

    expect(testBattle).toHaveProperty('trainerOne')
    expect(testBattle).toHaveProperty('trainerTwo')
    expect(testBattle.trainerOne.storage).toBe(1)
    expect(testBattle.trainerTwo.storage).toBe(1)
  })

  test('Turn function decides which player goes first', () => {
    const playerOne = new Trainer('Red')
    const playerTwo = new Trainer('Blue')

    let testBattle = new Battle(playerOne, playerTwo, charmander, bulbasaur)

    playerOne.speed = 12
  })
})
