const { Trainer } = require('../trainers')
const { Pokemon, FireType, WaterType, GrassType } = require('../pokemon.js')

describe('Trainers', () => {
  test('Creating a new trainer returns a name and empty pokeBelt', () => {
    const player = new Trainer('Red')

    let actual = player
    let expected = { name: 'Red', pokeBelt: {}, slots: 6, storage: 0 }

    expect(actual).toEqual(expected)
  })

  test('Catch method allows adding pokemon to the pokeBelt', () => {
    const bulbasaur = new GrassType(
      'Bulbasaur',
      45,
      16,
      'Bul... Bulbasaur!',
      'Razor Leaf',
    )

    const player = new Trainer('Red')
    player.catch(bulbasaur)

    let actual = player.pokeBelt
    let expected = {
      '1': {
        name: 'Bulbasaur',
        hitPoints: 45,
        attackDmg: 16,
        sound: 'Bul... Bulbasaur!',
        moves: 'Razor Leaf',
        type: 'Grass',
        strength: 'Water',
        weakness: 'Fire',
      },
    }

    expect(actual).toEqual(expected)
  })

  test('catch method allows several pokemon to be caught', () => {
    const player = new Trainer('Red')
    const bulbasaur = new GrassType(
      'Bulbasaur',
      45,
      16,
      'Bul... Bulbasaur!',
      'Razor Leaf',
    )

    const squirtle = new WaterType(
      'Squirtle',
      44,
      16,
      'Squ...Squirtle!',
      'Surf',
    )
    const charmander = new FireType(
      'Charmander',
      44,
      17,
      'Cha...Charmander!',
      'Flamethrower',
    )

    player.catch(bulbasaur)
    player.catch(squirtle)
    player.catch(charmander)

    let actual = player.storage
    let expected = 3

    expect(actual).toBe(expected)
  })

  test('Pokebelt has 6 slots, players cannot add more pokemon', () => {
    const player = new Trainer('Red')
    const charmander = new FireType(
      'Charmander',
      44,
      17,
      'Cha...Charmander!',
      'Flamethrower',
    )
    player.storage = 6

    let actual = player.catch(charmander)
    let expected = 'All slots on the PokeBelt are full!'

    expect(actual).toBe(expected)
  })
})
