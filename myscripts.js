const getComputerChoice=()=>{
    let num=Math.floor(Math.random()*3);
    if(num==1)
    {return "Rock";}
else if(num==2){return "Paper";}
else{
return "Scissor";
}
}

function gameRound(playerSelection, computerSelection)
{
    if(playerSelection==computerSelection) return 1;
    else{
    return 0;
    }
}

function game(){
  
    let winCnt=0;
    for(let i=0;i<5;i++)
    {
        let playerChoice=prompt("Input your Choice from Rock, Paper, Scissor");
        let computerChoice=getComputerChoice();
       if(gameRound(playerChoice,computerChoice)==1)
        winCnt++;
    }
    console.log(winCnt);
    if(winCnt>=2)
    {
        console.log("You Won")
    }
    else
    {
        console.log("You Lost");
    }

}
game();