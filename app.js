function computer_scores(battle){
    battle['computer'] = battle['computer']+ 1
    score = document.getElementById('computer_score_battle')
    score.innerHTML = battle['computer']
    return battle
}

function player_scores(battle){
    battle['player'] = battle['player'] +  1
    score = document.getElementById('player_score_battle')
    score.innerHTML = battle['player']
    return battle
}

function computer_win_game(game){
    game['computer'] = game['computer'] + 1
    score = document.getElementById('computer_score')
    score.innerHTML = game['computer']
    return game
}

function player_win_game(game){
    game['player'] = game['player']+ 1
    score = document.getElementById('player_score')
    score.innerHTML = game['player']
    return game
}

function choose_weapon(){
    return Math.floor(Math.random() * (2 - 0 + 1))
}   

function get_weapon_image(value){
    array = ['./images/rock.png','./images/paper.png','./images/scissors.png']
    return array[value]
}

function change_player_img(new_image){
    img = document.getElementById('player_weapon')
    img.src = new_image
}

function change_computer_img(new_image){
    img = document.getElementById('computer_weapon')
    img.src = new_image
}

function check_winner(human,computer){
    if (human === computer){
        return 0
    }
    else if (human == 0 && computer == 1){
        return -1
    }
    else if (human == 1 && computer == 2){
        return -1
    }
    else if (human == 2 && computer == 0){
        return -1
    }
    else if (human == 1 && computer == 0){
        return 1
    }
    else if (human == 2 && computer == 1){
        return 1
    }
    else if (human == 0 && computer == 2){
        return 1
    }
}
function battle_reset(){
    score_computer = document.getElementById('computer_score_battle')
    score_computer.innerHTML = 0
    score_player = document.getElementById('player_score_battle')
    score_player.innerHTML = 0
    return {
        'player':0,
        'computer':0
    }
}

function game_reset(){
    score_computer = document.getElementById('computer_score')
    score_computer.innerHTML = 0
    score_player = document.getElementById('player_score')
    score_player.innerHTML = 0
    return {
        'player':0,
        'computer':0
    }
}

let game = {
    'player':0,
    'computer':0
}

let battle = {
    'player':0,
    'computer':0
}

let new_game_button = document.getElementById('new_game').addEventListener('click',() => {
    game = game_reset()
    battle = battle_reset()
    });

let wars_visible = document.getElementById('make_wars_visible').addEventListener('click',(e) => {
    
    let scores = document.getElementById('score_games')
    if (scores.style.display === 'none' || scores.style.display === ''){
        scores.style.display = 'flex'
        e.target.innerHTML = "Wars Own ↑"
    }else{
        scores.style.display = 'none'
        e.target.innerHTML = "Wars Own ↓"
    }
})

let weapons = document.querySelectorAll('#weapon')
weapons.forEach(weapon => {
    weapon.addEventListener('click',(e)=>{
        let player_choice = parseInt(e.target.className)
        change_player_img(get_weapon_image(player_choice))
        let computer_choice = choose_weapon()
        change_computer_img(get_weapon_image(computer_choice))
        result = check_winner(player_choice, computer_choice)
        if (result === 1){
            battle = player_scores(battle)
        } else if (result === -1){
            battle = computer_scores(battle)
        }
        if (battle['player'] === 5){
            game = player_win_game(game)
            battle = battle_reset()
        } else if (battle['computer'] === 5){
            game = computer_win_game(game)
            battle = battle_reset()
        }
    })
});