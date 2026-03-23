let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let start = false;
let level = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let highScore = localStorage.getItem("highScore") || 0;
h3.innerHTML = `Highest Score: <b>${highScore}</b>`;

document.addEventListener("keypress",function(){
   if(start == false){
    start = true;

    levelUp();
   } 
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    localStorage++;
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random()*3);
    let randcolor = btns[random];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if (level > highScore) {
            highScore = level;
            localStorage.setItem("highScore", highScore);
        }
        h2.innerHTML = `Game Over!! your Score is <b>${level}</b> <br> Press any key to start the game`;
        h3.innerHTML = `Highest Score: <b>${highScore}</b>`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        reset();
    }
}
function btnPress(){
    let btn =  this;
    gameFlash(btn);
    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
