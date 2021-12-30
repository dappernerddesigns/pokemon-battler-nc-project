const { Trainer } = require('../trainers')
const { Pokemon, FireType, WaterType, GrassType } = require('../pokemon.js')

describe('Trainers', () => {
  test('Creating a new trainer returns a name and empty pokeBelt', () => {
    const player = new Trainer('Red')

    let actual = player
    let expected = { name: 'Red', pokeBelt: {} }

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
      Slot_one: {
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
})
