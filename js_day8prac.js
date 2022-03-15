const maxform = document.getElementById("maxform");
const userMax = maxform.querySelector("input");

const userGuess = document.querySelector("#guessform input");
const playBtn = document.querySelector("#guessform button");

const guessForm = document.querySelector("#guessform");
const hiddenForm = document.getElementById("hiddenform");
const result_lose = document.getElementById("result_lose");
const result_win = document.getElementById("result_win");






function playBtnClick(pop){
  const userMaxValue = userMax.value;
  const userGuessValue = userGuess.value;
  const siri = Math.floor((Math.round(Math.random()*10))/10*userMaxValue) ;
 
  
  pop.preventDefault();

 
    if(isNaN(userMaxValue) || isNaN(userGuessValue)){
      alert("Pleas write number.");
    }

    else if (userGuessValue > userMaxValue){
      alert("Please write the number under the maximum.")
    } 
    
    else if (userGuessValue <0){
      alert("Please write the positive number or Zero.")
    } 

    else if(userGuessValue !== siri){
      hiddenForm.classList.remove("hidden");
      hiddenForm.innerText = `You chose: ${userGuessValue}, the Siri chose: ${siri}`;

      result_lose.classList.remove("hidden");
      result_lose.innerText=`lose`;
      result_win.classList.add("hidden");    
    } 
    
    else if(userGuessValue === siri){
      hiddenForm.classList.remove("hidden");
      hiddenForm.innerText = `You chose: ${userGuessValue}, the Siri chose: ${siri}`;

      result_lose.classList.add("hidden");
      result_win.innerText=`lose`;
      result_win.classList.remove("hidden");
      
    }

}




guessForm.addEventListener("submit" ,playBtnClick);
