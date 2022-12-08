let readlineSync = require("readline-sync");
var game= ['rock', 'paper', 'scissors'];
var randomMoveOfComputer = game[Math.floor(Math.random() * game.length)];
var p1name= readlineSync.question("What is your name: ")
console.log("Hello "+ p1name )
console.log("choose any move in rock paper scissors")
var move = readlineSync.question("Which move you want to do? ");
if (move == randomMoveOfComputer){
   console.log("Match Draw");
}
else if(move =="rock" && randomMoveOfComputer == "paper"){
   console.log("computer won the match");
}
else if(move=="rock" && randomMoveOfComputer == "scissors"){
   console.log(p1name+" Won the match");
}
else if(move=="scissors" && randomMoveOfComputer == "rock"){
   console.log("computer won the match");
}
else if(move=="scissors" && randomMoveOfComputer == "paper"){
   console.log(p21name+" Won the match");
}
else if(move=="paper" && randomMoveOfComputer == "rock"){
   console.log(p1name+" Won the match");
}
else if(move=="paper" && randomMoveOfComputer == "scissors"){
   console.log("computer won the match");
}






