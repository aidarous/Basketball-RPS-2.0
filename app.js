let guard = {
    "position" : "guard",
    "moves" : ["shoot", 'pass', 'steal'],
    
    }

let forward = {
    "position" : "forward",
    "moves" : ["catch and shoot", "cut to basket", "help defense"]
    }

let center = {
    "position" : "center",
    "moves" : ["dunk","pick and roll","block"]
} 


let playerScore = 0;
let displayPlayerScore = document.getElementById('player-score');
let opponentScore = 0;
let displayOpponentScore = document.getElementById('opponent-score');


let positions = ['guard','forward','center'];
let positionSelector = positions[Math.floor(Math.random()*positions.length)]

let guardMoveSelector = guard.moves[Math.floor(Math.random()*guard.moves.length)];
let forwardMoveSelector = forward.moves[Math.floor(Math.random()*forward.moves.length)] ;
let centerMoveSelector = center.moves[Math.floor(Math.random()*center.moves.length)]; 
