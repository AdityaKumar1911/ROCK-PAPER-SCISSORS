const handOptions = {
  "rock": "/assets/rockbg.png",
  "paper": "/assets/paperbg.png",
  "scissors": "/assets/ssbg.png"
}

let CSCORE = 0;
let SCORE = 0;
let allscore = localStorage.getItem("score") || [

]
// let COMSCORE = 0;

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand]
    
    referee(hand, cpHand);
};
localStorage.setItem('comscore', 'addd' )

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    setScoree(CSCORE + 1);
    localStorage.setItem('comscore',CSCORE + 1 )
    alert("aditya");
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    localStorage.setItem("yourscore",SCORE + 1 )
   
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    localStorage.setItem("yourscore",SCORE + 1 )
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setScoree(CSCORE + 1);
    localStorage.setItem("comscore",CSCORE + 1 )
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setScoree(CSCORE + 1);
    localStorage.setItem("comscore",CSCORE + 1 )
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    localStorage.setItem("yourscore",SCORE + 1 )
    
  }
};


const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}



const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;

}
const setScoree = (newScoree) =>{
  CSCORE = newScoree;
  document.querySelector(".cscore h1").innerText = newScoree;
  
}


function myFunction() {
  var x = document.getElementById("notification");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


