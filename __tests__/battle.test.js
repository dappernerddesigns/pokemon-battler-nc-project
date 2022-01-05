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

    playerOne.catch(charmander)
    playerTwo.catch(flareon)
    let testBattle = new Battle(playerOne, playerTwo)
    testBattle.fight()

    charmander.useYourMoves()
    flareon.useYourMoves()
    let actual = flareon.hitPoints
    let expected = 48

    expect(actual).toBe(expected)
  })

  test('A fainted pokemon will log hitpoints at zero', () => {
    const playerOne = new Trainer('Red')
    const playerTwo = new Trainer('Blue')

    playerOne.catch(charmander)
    playerTwo.catch(flareon)

    let testBattle = new Battle(playerOne, playerTwo)

    testBattle.fight()
    testBattle.fight()
    testBattle.fight()
    testBattle.fight()

    let actual = charmander.hitPoints
    let expected = 0

    expect(actual).toBe(expected)
  })

  test.only('Strengths and weaknesses are calculated correctly', () => {
    const playerOne = new Trainer('Red')
    const playerTwo = new Trainer('Blue')

    playerOne.catch(charmander)
    playerTwo.catch(bulbasaur)

    let testBattle = new Battle(playerOne, playerTwo)

    testBattle.fight()

    let actual = bulbasaur.hitPoints
    let expected = 24

    expect(actual).toBe(expected)
  })
})
