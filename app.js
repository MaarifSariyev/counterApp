const minusBtn = document.querySelector(".minusBtn");
let score = document.querySelector(".score");
const plusBtn = document.querySelector(".plusBtn");
const resetBtn = document.querySelector(".resetBtn")
let increase = function(){
   score.innerHTML=+score.innerHTML + 1
}

plusBtn.addEventListener("click",increase)

let decrease = function(){
    score.innerHTML=+score.innerHTML - 1
 }
 
 minusBtn.addEventListener("click",decrease);

let reset = function(){
    score.innerHTML=0
}

resetBtn.addEventListener("click",reset);


