function computerScores (battle) {
  battle.computer = battle.computer + 1
  const score = document.getElementById('computer_score_battle')
  score.innerHTML = battle.computer
  return battle
}

function playerScores (battle) {
  battle.player = battle.player + 1
  const score = document.getElementById('player_score_battle')
  score.innerHTML = battle.player
  return battle
}

function computerWinGame (game) {
  game.computer = game.computer + 1
  const score = document.getElementById('computer_score')
  score.innerHTML = game.computer
  return game
}

function playerWinGame (game) {
  game.player = game.player + 1
  const score = document.getElementById('player_score')
  score.innerHTML = game.player
  return game
}

function chooseWeapon () {
  return Math.floor(Math.random() * (2 - 0 + 1))
}

function getWeaponImage (value) {
  const array = ['./images/rock.png', './images/paper.png', './images/scissors.png']
  return array[value]
}

function changePlayerImg (newImage) {
  const img = document.getElementById('player_weapon')
  img.src = newImage
}

function changeComputerImg (newImage) {
  const img = document.getElementById('computer_weapon')
  img.src = newImage
}

function checkWinner (human, computer) {
  if (human === computer) {
    return 0
  } else if (human === 0 && computer === 1) {
    return -1
  } else if (human === 1 && computer === 2) {
    return -1
  } else if (human === 2 && computer === 0) {
    return -1
  } else if (human === 1 && computer === 0) {
    return 1
  } else if (human === 2 && computer === 1) {
    return 1
  } else if (human === 0 && computer === 2) {
    return 1
  }
}

function battleReset () {
  const scoreComputer = document.getElementById('computer_score_battle')
  scoreComputer.innerHTML = 0
  const scorePlayer = document.getElementById('player_score_battle')
  scorePlayer.innerHTML = 0
  return {
    player: 0,
    computer: 0
  }
}

function gameReset () {
  const scoreComputer = document.getElementById('computer_score')
  scoreComputer.innerHTML = 0
  const scorePlayer = document.getElementById('player_score')
  scorePlayer.innerHTML = 0
  return {
    player: 0,
    computer: 0
  }
}

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
