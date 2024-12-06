const container = document.querySelector(".container");
import { pieceIds } from "./data/data.js";
import { CurrentPositions } from "./data/positions.js";

function squareRender(data){
  data.forEach(row => {
    row.forEach(square =>{
      const squareEl = document.createElement("div");
      squareEl.classList.add("square");
      squareEl.id = square;
      // squareEl.innerText = square;
      container.appendChild(squareEl);
    })
  });
}

function renderRedTitan(id){
  const squarePiece = document.getElementById(id);
  const createPiece = document.createElement("img");
  createPiece.src = "richo resources/titan red.png";
  createPiece.id = "red_titan";
  createPiece.classList.add("piece");
  
  squarePiece.appendChild(createPiece);
}

function renderBlueTitan(id){
  const squarePiece = document.getElementById(id);
  const createPiece = document.createElement("img");
  createPiece.src = "richo resources/titan blue.png";
  createPiece.classList.add("piece");
  createPiece.id = "blue_titan";
  squarePiece.appendChild(createPiece);
}

function renderRedCanon(id){
  const squarePiece = document.getElementById(id);
  const createPiece = document.createElement("img");
  createPiece.src = "richo resources/canon red.png";
  createPiece.classList.add("piece");
  createPiece.id = "red_canon";
  // const createBullet = document.createElement("div");
  // createBullet.classList.add("bullet");
  // createBullet.id = "bullet";
  squarePiece.appendChild(createPiece);
  // squarePiece.appendChild(createBullet);
}

function renderBlueCanon(id){
  const squarePiece = document.getElementById(id);
  const createPiece = document.createElement("img");
  createPiece.src = "richo resources/canon blue.png";
  createPiece.classList.add("piece");
  createPiece.classList.add("blue");
  createPiece.id = "blue_canon";
  squarePiece.appendChild(createPiece);
}

function renderRedRicho(id){
  const squarePiece = document.getElementById(id);
  const createPiece = document.createElement("img");
  createPiece.src = "richo resources/richo red.png";
  createPiece.classList.add("piece");
  createPiece.id = "red_richo";
  squarePiece.appendChild(createPiece);
}

function renderBlueRicho(id){
  const squarePiece = document.getElementById(id);
  const createPiece = document.createElement("img");
  createPiece.src = "richo resources/richo blue.png";
  createPiece.classList.add("piece");
  createPiece.classList.add("blue");
  createPiece.id = "blue_richo";
  squarePiece.appendChild(createPiece);
}

function renderRedSemiRicho(id){
  const squarePiece = document.getElementById(id);
  const createPiece = document.createElement("img");
  createPiece.src = "richo resources/semi richo red.png";
  createPiece.classList.add("piece");
  createPiece.id = "red_semi_richo";
  squarePiece.appendChild(createPiece);
}

function renderBlueSemiRicho(id){
  const squarePiece = document.getElementById(id);
  const createPiece = document.createElement("img");
  createPiece.src = "richo resources/semi richo blue.png";
  createPiece.classList.add("piece");
  createPiece.classList.add("blue");
  createPiece.id = "blue_semi_richo";
  squarePiece.appendChild(createPiece);
}

function renderRedTank(id){
  const squarePiece = document.getElementById(id);
  const createPiece = document.createElement("img");
  createPiece.src = "richo resources/tank red.png";
  createPiece.classList.add("piece");
  createPiece.id = "red_tank";
  squarePiece.appendChild(createPiece);
}

function renderBlueTank(id){
  const squarePiece = document.getElementById(id);
  const createPiece = document.createElement("img");
  createPiece.src = "richo resources/tank blue.png";
  createPiece.classList.add("piece");
  createPiece.id = "blue_tank";
  squarePiece.appendChild(createPiece);
}

function renderPossiblePositionCanon(data){
  for(let i=0;i<data.length;i++){
    if(data[i][1] != 'u'){
      const positions = Object.values(CurrentPositions);
      if(1-positions.includes(data[i])){
        const PossibleElement = document.getElementById(data[i])
        PossibleElement.classList.add("possiblePiece")
      }
    }
  }
}

function renderPossiblePositionOthers(data){
  console.log(data);
  for(let i=0;i<data.length;i++){
    if(data[i][1] != 'u' && data[i][0] !='u'){
      const positions = Object.values(CurrentPositions);
      if(1-positions.includes(data[i])){
        const PossibleElement = document.getElementById(data[i])
        PossibleElement.classList.add("possiblePiece")
      }
    }
  }
}

export{squareRender , renderRedTitan , renderBlueTitan , renderRedCanon , renderBlueCanon , renderBlueRicho , renderBlueSemiRicho , renderBlueTank , renderRedRicho , renderRedSemiRicho , renderRedTank , renderPossiblePositionCanon , renderPossiblePositionOthers}