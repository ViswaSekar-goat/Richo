import { CreateSquare , positionsForCanon , pieceIds, positionsForOthers} from "./data/data.js";
import { renderPossiblePositionCanon , renderPossiblePositionOthers} from "./render.js";
import { CurrentPositions } from "./data/positions.js";
import { movement } from "./movements.js";

const container = document.querySelector(".container");
let element;
let currentTurn = "red";

CreateSquare([1,2,3,4,5,6,7,8]);

function swapTurn(){
  if(currentTurn ==="red"){
    currentTurn = "blue";
  }
  else{
    currentTurn = "red";
  }
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
      if(e.target.id == "blue canon" || e.target.id == "red canon"){
        renderPossiblePositionCanon(positionsForCanon(e.target.parentNode.id));
      }
      if(e.target.id == "red semi richo" || e.target.id == "blue semi richo" || e.target.id == "blue richo" || e.target.id == "red richo" || e.target.id == "red titan" || e.target.id == "blue titan" || e.target.id == "red tank" || e.target.id == "blue tank"){
        renderPossiblePositionOthers(positionsForOthers(e.target.parentNode.id));
      }
    }
  }
  // document.querySelectorAll(".highlight").forEach((el) => el.classList.remove("highlight"));
  // document.querySelectorAll(".possiblePiece").forEach((el) => el.classList.remove("possiblePiece"));
  // if(e.target.classList.contains("piece")){
  //   e.target.parentNode.classList.add("highlight");
  //   element = e.target.id;
  //   if(e.target.id == "blue canon" || e.target.id == "red canon"){
  //     renderPossiblePositionCanon(positionsForCanon(e.target.parentNode.id));
  //   }
  //   if(e.target.id == "red semi richo" || e.target.id == "blue semi richo" || e.target.id == "blue richo" || e.target.id == "red richo" || e.target.id == "red titan" || e.target.id == "blue titan" || e.target.id == "red tank" || e.target.id == "blue tank"){
  //     renderPossiblePositionOthers(positionsForOthers(e.target.parentNode.id));
  //   }
  // }
  
})




export {container}