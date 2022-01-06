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
const { playerOneName, playerTwoName, turnOrder } = require('../playTheGame')
const Battle = require('../battle')

describe('playTheGame', () => {
  test('Function correctly creates trainer', () => {
    let actual = playerOneName('Red')

    expect(actual).toHaveProperty('name')
    expect(actual).toHaveProperty('pokeBelt')
    expect(actual).toHaveProperty('speed')
    console.log(actual)
    actual.catch(charmander)
    console.log(actual)
  })

  test.skip('Turn function decides which player goes first', () => {
    const playerOne = playerOneName('Red')
    const playerTwo = playerTwoName('Blue')

    playerOne.speed = 12
    playerTwo.speed = 3

    let actual = turnOrder()
    let expected = `Red goes first!`

    expect(actual).toBe(expected)
  })
})
