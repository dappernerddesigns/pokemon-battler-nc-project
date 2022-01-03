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

describe('playTheGame', () => {
  test('Turn function decides which player goes first', () => {
    const playerOne = new Trainer('Red')
    const playerTwo = new Trainer('Blue')

    let testBattle = new Battle(playerOne, playerTwo, charmander, bulbasaur)

    playerOne.speed = 12
    playerTwo.speed = 3

    let actual = testBattle.fight()
    let expected = `Red goes first!`

    expect(actual).toBe(expected)
  })
})
