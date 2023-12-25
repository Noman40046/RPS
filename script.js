let user = 0;
let computer = 0;

let userScore = 0;
let comScore = 0;
const choise = document.querySelectorAll(".images");
const msg = document.querySelector(".finalResult");
const userScorePara = document.querySelector(".userScore");
const comScorePara = document.querySelector(".comScore");

const genCom = () => {
  const options = ["rock", "paper", "sissor"];
  const randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};


const draw = () => {
    msg.innerText = "Game is Draw. Play Again";
    msg.style.backgroundColor = "blue";

}

const showWinner = (userWin,userChoise,comch) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoise} beats ${comch}`;
        msg.style.backgroundColor = "green";
        

    }else{
        comScore++
        comScorePara.innerText = comScore;
        msg.innerText = `You Lose. Computer's ${comch} beats your ${userChoise}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoise) => {
  //console.log("use:" , userChoise);
  //generate computer choise
  //const comch = genCom();
  //console.log("comchoise:", comch);
  const comch = genCom();

  if (userChoise === comch) {
    draw();
  } else {
    let userWin = true;
    if (userChoise === "rock") {
        userWin = comch === "paper" ? false : true;
    } else if(userChoise === "paper"){
        userWin = comch === "sissor" ? false : true;
    }else {
        userWin = comch === "rock" ? false : true;
      }
      showWinner(userWin,userChoise,comch);
  }
};


choise.forEach((choise) => {
  choise.addEventListener("click", () => {
    let userChoise = choise.getAttribute("id");
    playGame(userChoise);
  });
});
