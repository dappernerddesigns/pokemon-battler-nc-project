const { Pokemon, FireType, WaterType, GrassType } = require('./pokemon.js')

const eevee = new Pokemon('Eevee', 55, 18, 'Eev...Eevee!', 'Headbutt', 'Normal')

const flareon = new FireType('Flareon', 65, 20, 'Fla... Flareon!', 'Fire blast')

const vaporeon = new WaterType(
  'Vaporeon',
  70,
  19,
  'Vap...Vaporeon!',
  'Hydro pump',
)

const leafeon = new GrassType('Leafeon', 65, 17, 'Lea...Leafeon!', 'Giga drain')

const charmander = new FireType(
  'Charmander',
  44,
  17,
  'Cha...Charmander!',
  'Flamethrower',
)

const squirtle = new WaterType('Squirtle', 44, 16, 'Squ...Squirtle', 'Surf')

const bulbasaur = new GrassType(
  'Bulbasaur',
  45,
  16,
  'Bul...Bulbasaur',
  'Razor leaf',
)

module.exports = {
  eevee,
  flareon,
  vaporeon,
  leafeon,
  charmander,
  squirtle,
  bulbasaur,
}
