
let userNum = 0;
let comNum = 0;

let msg = document.querySelector("#msg");

let msgContainer = document.querySelector(".msgContainer");

let usechoise = document.querySelectorAll(".choise");

let userscorePare = document.querySelector("#userScore");
let compscorePare = document.querySelector("#compScore");

let genrandomChoise = () => {
    let options = ["rock", "paper", "scrissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];

}

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = "You Win !";
        msgContainer.style.backgroundColor = "green";
    } else {
        msg.innerText = "You Lose !";
        msgContainer.style.backgroundColor = "red";
    }
  }


let playGame = (useChoise) => {
    console.log("user was choise", useChoise);
    const compChoise = genrandomChoise();
    console.log("comp choise was", compChoise);
    
    let drawGame = () => {
        msg.innerText = "Game Was draw";
    
    }


    if (useChoise === compChoise) {
        drawGame();
    } else {
        let userWin = true;
        if (useChoise === "rock") {
            userWin = compChoise === "paper" ? false : true;
        } else if (useChoise === "paper") {
            userWin = compChoise === "scrissors" ? false : true;
        } else {
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

usechoise.forEach((choise) => {
  choise.addEventListener("click", () => {
    let useChoise = choise.getAttribute("id");
      playGame(useChoise);

      
  });
});

