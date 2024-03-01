let userScore=0;
let compScore=0;

const Choices= document.querySelectorAll(".Choice");
const msg = document.querySelector("#msg");


const gencompChoice=()=>{
   const options=["rock","paper","scissors"];
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];
};


const draw=()=>{
    console.log("Game was draw");
    msg.innerHTML="Game was draw, Play again!";
    msg.style.backgroundColor="#142d4c";
};
  
const userScorepara=document.querySelector("#user-Score");
const compScorepara=document.querySelector("#comp-Score");

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win!");
        userScore++;
        userScorepara.innerHTML= userScore;
        msg.innerHTML="You Win!";
        msg.style.backgroundColor="Green";
    }else{
        console.log("You Lose!")
        compScore++;
        compScorepara.innerHTML=compScore;
        msg.innerHTML="You Lose!";
        msg.style.backgroundColor="Red";
    }      
};


const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const compChoice= gencompChoice();
    console.log("compChoice =",compChoice);
    if(userChoice===compChoice){
        draw();
    }else{
          let userWin= true;
          if(userChoice==="rock"){
          userWin=compChoice==="paper"?false:true;
          }else if(userChoice==="paper"){
          userWin=compChoice==="Scissors"?false:true;
          }else {
          userWin=compChoice==="rock"?false:true;
          }
          showWinner(userWin,userChoice,compChoice);
    } 
};
Choices.forEach((Choice)=>{
    console.log(Choice);
       Choice.addEventListener("click",()=>{
        const userChoice=Choice.getAttribute("id");
        playGame(userChoice);
       });
    });
