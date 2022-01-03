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

    let testBattle = new Battle(playerOne, playerTwo)
    playerOne.catch(charmander)
    playerTwo.catch(bulbasaur)
    expect(testBattle).toHaveProperty('trainerOne')
    expect(testBattle).toHaveProperty('trainerTwo')
    expect(testBattle.trainerOne.storage).toBe(1)
    expect(testBattle.trainerTwo.storage).toBe(1)
  })

  test('Fight method depletes pokemon health', () => {
    const playerOne = new Trainer('Red')
    const playerTwo = new Trainer('Blue')

    let testBattle = new Battle(playerOne, playerTwo)
    playerOne.catch(charmander)
    playerTwo.catch(charmander)
    charmander.useYourMoves()
    let actual = charmander.hitPoints
    let expected = 27

    expect(actual).toBe(expected)
  })
})
