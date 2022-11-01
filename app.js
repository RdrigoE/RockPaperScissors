import { battleReset, gameReset, changePlayerImg, getWeaponImage, chooseWeapon, changeComputerImg, checkWinner, playerScores, computerScores, playerWinGame, computerWinGame } from './utils'

let game = {
  player: 0,
  computer: 0
}

let battle = {
  player: 0,
  computer: 0
}

document.getElementById('new_game').addEventListener('click', () => {
  game = gameReset()
  battle = battleReset()
})

document.getElementById('make_wars_visible').addEventListener('click', (e) => {
  const scores = document.getElementById('score_games')
  if (scores.style.display === 'none' || scores.style.display === '') {
    scores.style.display = 'flex'
    e.target.innerHTML = 'Wars Own ↑'
  } else {
    scores.style.display = 'none'
    e.target.innerHTML = 'Wars Own ↓'
  }
})

const weapons = document.querySelectorAll('#weapon')
weapons.forEach(weapon => {
  weapon.addEventListener('click', (e) => {
    const playerChoice = parseInt(e.target.className)
    changePlayerImg(getWeaponImage(playerChoice))
    const computerChoice = chooseWeapon()
    changeComputerImg(getWeaponImage(computerChoice))
    const result = checkWinner(playerChoice, computerChoice)
    if (result === 1) {
      battle = playerScores(battle)
    } else if (result === -1) {
      battle = computerScores(battle)
    }
    if (battle.player === 5) {
      game = playerWinGame(game)
      battle = battleReset()
    } else if (battle.computer === 5) {
      game = computerWinGame(game)
      battle = battleReset()
    }
  })
})
