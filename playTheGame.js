const { Trainer } = require('./trainers')
const {
  eevee,
  flareon,
  vaporeon,
  leafeon,
  charmander,
  squirtle,
  bulbasaur,
} = require('./createdPokemon.js')
const battle = require('./battle')
const inquirer = require('inquirer')

function playerOneName(pOneName) {
  let playerOne = new Trainer(`${pOneName}`)
  return playerOne
}

function playerTwoName(pTwoName) {
  let playerTwo = new Trainer(`${pTwoName}`)
  return playerTwo
}

function playerOnePokePick(p1Poke) {
  if (p1Poke === 'Bulbasaur') {
    playerOne.catch(bulbasaur)
  } else if (p1Poke === 'Charmander') {
    playerOne.catch(charmander)
  } else if (p1Poke === 'Squirtle') {
    playerOne.catch(squirtle)
  } else if (p1Poke === 'Flareon') {
    playerOne.catch('Flareon')
  } else if (p1Poke === 'Vaporeon') {
    playerOne.catch(vaporeon)
  } else playerOne.catch(leafeon)
}

function playerTwoPokePick(p2Poke) {
  if (p2Poke === 'Bulbasaur') {
    playerTwo.catch(bulbasaur)
  } else if (p2Poke === 'Charmander') {
    playerTwo.catch(charmander)
  } else if (p2Poke === 'Squirtle') {
    playerTwo.catch(squirtle)
  } else if (p2Poke === 'Flareon') {
    playerTwo.catch('Flareon')
  } else if (p2Poke === 'Vaporeon') {
    playerTwo.catch(vaporeon)
  } else playerTwo.catch(leafeon)
}
let playerOneMessage = [
  {
    message: 'Player one, what is your name?',
    type: 'input',
    name: 'pOneName',
  },
]

let playerOnePoke = [
  {
    name: 'p1Poke',
    message: 'Which Pokemon will you battle today?',
    type: 'list',
    choices: [
      'Charmander',
      'Squirtle',
      'Bulbasaur',
      'Flareon',
      'Leafeon',
      'Vaporeon',
    ],
  },
]

let playerTwoMessage = [
  {
    message: 'Player two, what is your name?',
    type: 'input',
    name: 'pTwoName',
  },
]

let playerTwoPoke = [
  {
    name: 'p2Poke',
    message: 'Which Pokemon will you battle today?',
    type: 'list',
    choices: [
      'Charmander',
      'Squirtle',
      'Bulbasaur',
      'Flareon',
      'Leafeon',
      'Vaporeon',
    ],
  },
]

console.log(`\n
          /###########                                     ###########          
################################################################################
#########                       #################                      *########
 #######                          (###########                           #######
  #####.                           ###########                           ###### 
    ####                           ###    ####                           ####   
    ####                          ###(     ####                          ####   
     ####                        ###*       ####                        ####    
      ####                     ####          *####                     ####     
       ####,                ######             #####*                #####      
         ######,      .########                  *#######,      .#######        
             ##############                           #############(            
                                                                                
                                                                                
                 *####/                                    #####                
                ############*                        #############              
               ##################                ##################             
               ####################################################             
               ####################################################             
               ####################################################             
               ###################################################/             
               ################.                  ################              
                ###########                            ###########              
\n\n\n`)

console.log(`Welcome to my Pokemon battle simulator - The Dapper Nerd`)

inquirer
  .prompt(playerOneMessage)
  .then(playerOneName)
  .then(() => {
    inquirer.prompt(playerOnePoke).then(playerOnePokePick)
  })
  .then(() => {
    inquirer.prompt(playerTwoMessage).then(playerTwoName)
  })
  .then(() => {
    inquirer.prompt(playerTwoPoke).then(playerTwoPokePick)
  })

module.exports = { playerOneName, playerTwoName }
