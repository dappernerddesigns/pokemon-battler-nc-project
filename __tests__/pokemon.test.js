const Pokemon = require('../pokemon.js')

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
      strength: 'None',
      weakness: 'Fighting',
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
})
