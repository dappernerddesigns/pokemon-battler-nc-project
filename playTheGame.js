const { Trainer } = require('./trainers')
const { Pokemon, FireType, WaterType, GrassType } = require('./pokemon.js')
const battle = require('./battle')
const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      name: 'name',
      message: 'Hello there, what is your name?',
      type: 'input',
    },
  ])
  .then((answer) => {
    console.log(`Hello ${answer.name}!`)
  })
  .catch((error) => {
    console.log(error)
  })

function turnOrder() {
  if (this.trainerOne.speed > this.trainerTwo.speed) {
    return `${this.trainerOne.name} goes first!`
  } else {
    return `${this.trainerTwo.name} goes first!`
  }
}
