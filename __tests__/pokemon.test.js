const { Pokemon, FireType, WaterType, GrassType } = require('../pokemon.js')

describe('Creating Pokemon', () => {
  test('Using the constructor a pokemon has all the required attributes', () => {
    const eevee = new Pokemon(
      'Eevee',
      55,
      18,
      'Eev...Eevee!',
      'Headbutt',
      'Normal',
      'None',
      'Fighting',
    )

    let actual = eevee
    let expected = {
      name: 'Eevee',
      hitPoints: 55,
      attackDmg: 18,
      sound: 'Eev...Eevee!',
      moves: 'Headbutt',
      type: 'Normal',
    }

    expect(actual).toEqual(expected)
  })

  test('Pokemon class has a method that returns the new Pokemons sound', () => {
    const bulbasaur = new Pokemon(
      'Bulbasaur',
      45,
      16,
      'Bul... Bulbasaur!',
      'Razor Leaf',
      'Grass',
      'Water',
      'Fire',
    )

    let actual = bulbasaur.talk()
    let expected = 'Bul... Bulbasaur!'

    expect(actual).toBe(expected)
  })

  test('Fire, water and grass types can be made from a class extender', () => {
    const flareon = new FireType(
      'Flareon',
      65,
      20,
      'Fla... Flareon!',
      'Fire blast',
    )

    let actual = flareon
    let expected = {
      name: 'Flareon',
      hitPoints: 65,
      attackDmg: 20,
      sound: 'Fla... Flareon!',
      moves: 'Fire blast',
      type: 'Fire',
      strength: 'Grass',
      weakness: 'Water',
    }

    expect(actual).toEqual(expected)
  })

  test('Pokemon types have correct strengths and weaknesses', () => {
    const fire = new FireType()
    const water = new WaterType()
    const grass = new GrassType()

    expect(fire.weakness).toBe('Water')
    expect(water.weakness).toBe('Grass')
    expect(grass.weakness).toBe('Fire')
    expect(fire.strength).toBe('Grass')
    expect(water.strength).toBe('Fire')
    expect(grass.strength).toBe('Water')
  })

  test('useYourMoves method returns the move of the created Pokemon.', () => {
    const charmander = new FireType(
      'Charmander',
      44,
      17,
      'Char...Charmander!',
      'Flamethrower',
    )

    let actual = charmander.useYourMoves()
    let expected = 'Flamethrower'

    expect(actual).toBe(expected)
  })
})
