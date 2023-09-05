//Querying HTML DOM to get elements to dynamically change the webpage

var playGround = document.querySelectorAll("div")[0];
var result = document.querySelector("h1");
var imgSrc1 = document.querySelectorAll("img")[0];
var imgSrc2 = document.querySelectorAll("img")[1];
var Start = document.querySelectorAll("button")[0];
var play = document.querySelectorAll("button")[1];
var score = document.querySelectorAll("button")[2];
var restart = document.querySelectorAll("button")[3];
var quit = document.querySelectorAll("button")[4];

//The starting page of the game...

play.classList.add("hide-play");
score.classList.add("hide-score");
restart.classList.add("hide-restart");
quit.classList.add("hide-quit");

// variable to store data

var p1Score,p2Score,matchPlayed,matchTied;
p1Score = p2Score = matchPlayed = matchTied = 0;

//Start bbutton - to play the first match

Start.addEventListener("click",function(){
    generateRandomDiceImage();
    play.classList.remove("hide-play");
    score.classList.remove("hide-score");
    Start.classList.add("hide-start");
    restart.classList.add("hide-restart");
    quit.classList.add("hide-quit");
}); 

//Play Again

play.addEventListener("click",function(){
    generateRandomDiceImage();
});

//create Scorecard

function createScorecard(){
    let scorecard = document.querySelectorAll("div")[3];
    scorecard.classList.add("view-scorecard");
    let header = document.createElement("h2");
    header.innerHTML = "Scorecard";
    scorecard.appendChild(header);
    let matches = document.createElement("p");
    matches.innerHTML = "Matches Played : " + matchPlayed;
    scorecard.appendChild(matches);
    let tied = document.createElement("p"); 
    tied.innerHTML = "Matches Tied : " + matchTied;
    scorecard.appendChild(tied);
    let p1 = document.createElement("p");
    p1.innerHTML = "Player 1 : " + p1Score;
    scorecard.appendChild(p1);
    let p2 = document.createElement("p");
    p2.innerHTML = "Player 2 : " + p2Score; 
    scorecard.appendChild(p2);  
}

//score

score.addEventListener("click",function(){
    restart.classList.remove("hide-restart");
    quit.classList.remove("hide-quit");
    play.classList.add("hide-play");
    score.classList.add("hide-score");
    playGround.classList.add("hide-container");
    createScorecard();
    
});

//restart 

restart.addEventListener("click",function(){
    window.location.reload();
});

//quit

quit.addEventListener("click",function(){
    window.close();
})

//Function to generate randomDiceImage for player1 and player2...

function generateRandomDiceImage(){
    matchPlayed += 1;
    var player1 = generateRandomNumber();
    var player2 = generateRandomNumber();
    imgSrc1.setAttribute("src","images/dice" + player1 + ".png");
    imgSrc2.setAttribute("src","images/dice" + player2 + ".png");

    // Determining Result of the game...

    if(player1 > player2){
        result.innerHTML = "🚩 Player 1 Wins!"; 
        p1Score += 1;
    }
    else if(player2 > player1){
        result.innerHTML = "Player 2 Wins! 🚩";
        p2Score += 1;
    }
    else{
        result.innerHTML = "🤝Draw!🤝";
        matchTied += 1;
    }
}

//Function to generate random between 1 to 6...

function generateRandomNumber(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

