const handOptions = {
  rock: "/assets/rockbg.png",
  paper: "/assets/paperbg.png",
  scissors: "/assets/ssbg.png",
};

let CSCORE = parseInt(localStorage.getItem("comscore")) || 0;
let SCORE = parseInt(localStorage.getItem("yourscore")) || 0;

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";
  // Set user Image
  document.getElementById("userPickImage").src = handOptions[hand];
  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];
  // Set computer image
  document.getElementById("computerPickImage").src = handOptions[cpHand];
  referee(hand, cpHand);
};
// document.querySelector('handImageContainer').style.background = "red !important";
const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    setScoree(CSCORE + 1);
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    let wrapper  = document.querySelector("#nextbtn ");
     wrapper.style.display = "block";
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    let wrapper  = document.querySelector("#nextbtn ");
     wrapper.style.display = "block";
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setScoree(CSCORE + 1);
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
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    let wrapper  = document.querySelector("#nextbtn ");
     wrapper.style.display = "block";
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (newScore) => {
  SCORE = newScore;
  localStorage.setItem("yourscore", SCORE);
  document.querySelector(".score h1").innerText = SCORE;
};

const setScoree = (newScoree) => {
  CSCORE = newScoree;
  localStorage.setItem("comscore", CSCORE);
  document.querySelector(".cscore h1").innerText = CSCORE;
};

// Initialize the score display
document.querySelector(".score h1").innerText = SCORE;
document.querySelector(".cscore h1").innerText = CSCORE;

const playAgain = () =>{
  let wongame =document.querySelector(".wongame");
  wongame.style.display = "none";
  
  let hands  =document.querySelector(".hands ");
  hands.style.display = "flex";
  let contest  =document.querySelector(".contest ");
  contest .style.display = "none"
  let wrapper  = document.querySelector(".wrapper ");
  wrapper .style.display = "flex";
}

const myNext = () =>{
 let wrapper = document.querySelector(".wrapper");
 wrapper.style.display = "none";
 let nextbtn = document.querySelector("#nextbtn");
 nextbtn.style.display = "none";
 let wongame =document.querySelector(".wongame");
  wongame.style.display = "block";
}