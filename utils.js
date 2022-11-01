export function computerScores (battle) {
  battle.computer = battle.computer + 1
  const score = document.getElementById('computer_score_battle')
  score.innerHTML = battle.computer
  return battle
}

export function playerScores (battle) {
  battle.player = battle.player + 1
  const score = document.getElementById('player_score_battle')
  score.innerHTML = battle.player
  return battle
}

export function computerWinGame (game) {
  game.computer = game.computer + 1
  const score = document.getElementById('computer_score')
  score.innerHTML = game.computer
  return game
}

export function playerWinGame (game) {
  game.player = game.player + 1
  const score = document.getElementById('player_score')
  score.innerHTML = game.player
  return game
}

export function chooseWeapon () {
  return Math.floor(Math.random() * (2 - 0 + 1))
}

export function getWeaponImage (value) {
  const array = ['./images/rock.png', './images/paper.png', './images/scissors.png']
  return array[value]
}

export function changePlayerImg (newImage) {
  const img = document.getElementById('player_weapon')
  img.src = newImage
}

export function changeComputerImg (newImage) {
  const img = document.getElementById('computer_weapon')
  img.src = newImage
}

export function checkWinner (human, computer) {
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

export function battleReset () {
  const scoreComputer = document.getElementById('computer_score_battle')
  scoreComputer.innerHTML = 0
  const scorePlayer = document.getElementById('player_score_battle')
  scorePlayer.innerHTML = 0
  return {
    player: 0,
    computer: 0
  }
}

export function gameReset () {
  const scoreComputer = document.getElementById('computer_score')
  scoreComputer.innerHTML = 0
  const scorePlayer = document.getElementById('player_score')
  scorePlayer.innerHTML = 0
  return {
    player: 0,
    computer: 0
  }
}
