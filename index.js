import { CreateSquare , positionsForCanon , pieceIds, positionsForOthers} from "./data/data.js";
import { renderPossiblePositionCanon , renderPossiblePositionOthers} from "./render.js";
import { CurrentPositions } from "./data/positions.js";
import { movement } from "./movements.js";

const container = document.querySelector(".container");
let element;
const buttons = Array.from(document.querySelectorAll("button"));
const turnData = document.querySelector(".turndata");
let currentTurn = "red";
turnData.innerHTML = `player : ${currentTurn}`;
CreateSquare([1,2,3,4,5,6,7,8]);
const timer1 = document.getElementById("blue-timer");
const timer2 = document.getElementById("red-timer");
timer1.style.opacity = "30%";

function swapTurn(){
  if(currentTurn ==="red"){
    turnData.classList.add("blueData");
    buttons.forEach((button)=>{
      button.classList.add("blueButton")
    })
    timer1.classList.remove("red-timer");
    timer1.classList.add("blue-timer");
    timer2.classList.remove("red-timer");
    timer2.classList.add("blue-timer");
    currentTurn = "blue";
    timer2.style.opacity = "30%";
    timer1.style.opacity = "100%"
  }
  else{
    currentTurn = "red";
    turnData.classList.remove("blueData");
    buttons.forEach((button)=>{
      button.classList.remove("blueButton")
    })
    timer1.classList.remove("blue-timer");
    timer1.classList.add("red-timer");
    timer2.classList.remove("blue-timer");
    timer2.classList.add("red-timer");
    timer1.style.opacity = "30%";
    timer2.style.opacity = "100%";
  }
  turnData.innerHTML = `player : ${currentTurn}`;
  console.log(`turn switched to ${currentTurn}`);
}

container.addEventListener("click",(e)=>{


  if(e.target.classList.contains("possiblePiece")){
    console.log(e.target.id , element , CurrentPositions[element] );
    movement(element , CurrentPositions[element],e.target.id);
    document.querySelectorAll(".highlight").forEach((el) => el.classList.remove("highlight"));
    document.querySelectorAll(".possiblePiece").forEach((el) => el.classList.remove("possiblePiece"));
    swapTurn()
    console.log(currentTurn);
  }

  console.log(e.target.id.startsWith("red"))

  if((e.target.id.startsWith("red") && currentTurn === "red")||(e.target.id.startsWith("blue") && currentTurn === "blue")){
    document.querySelectorAll(".highlight").forEach((el) => el.classList.remove("highlight"));
    document.querySelectorAll(".possiblePiece").forEach((el) => el.classList.remove("possiblePiece"));
    if(e.target.classList.contains("piece")){
      e.target.parentNode.classList.add("highlight");
      element = e.target.id;
      if(e.target.id == "blue_canon" || e.target.id == "red_canon"){
        renderPossiblePositionCanon(positionsForCanon(e.target.parentNode.id));
      }
      if(e.target.id == "red_semi_richo" || e.target.id == "blue_semi_richo" || e.target.id == "blue_richo" || e.target.id == "red_richo" || e.target.id == "red_titan" || e.target.id == "blue_titan" || e.target.id == "red_tank" || e.target.id == "blue_tank"){
        renderPossiblePositionOthers(positionsForOthers(e.target.parentNode.id));
      }
    }
  }
})

// function checkCollision(){
//   const bullet = document.getElementById("bullet");
//   const target = document.getElementById("blue_tank");

//   const bulletRect = bullet.getBoundingClientRect();
//   const targetRec = target.getBoundingClientRect();

//   if((Math.abs(bulletRect.x-targetRec.x)>=0 && Math.abs(bulletRect.x - targetRec.x)<=35)&&
//     (Math.abs(bulletRect.y-targetRec.y)>=0 && Math.abs(bulletRect.y - targetRec.y)<=40)){
//     console.log(bulletRect.x ,bulletRect.y, targetRec.x , targetRec.y);
//     alert("collision");
//     bullet.remove();
//     clearInterval(interval);
//   }
// }

// const interval = setInterval(checkCollision,40);


export {container}