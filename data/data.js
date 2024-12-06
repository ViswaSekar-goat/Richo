import * as renderFiles from "../render.js";
const alphas = ['a','b','c','d','e','f','g','h'];
const pieceIds = ["red canon","blue canon","red semi richo","blue semi richo","blue richo","red richo","red titan","blue titan","red tank","blue tank"];
const numbers = ["1","2","3","4","5","6","7","8"];


function CreateSquare(rows){
  const squareIds = [];
  for(let i=0;i<rows.length;i++){
    const rowids = [];
    for(let j=0;j<alphas.length;j++){
      const squareId = rows[i]+alphas[j];
      rowids.push(squareId);
    }
    squareIds.push(rowids);
  }
  renderFiles.squareRender(squareIds);
  renderAll(squareIds);
}

function renderAll(data){
  data.forEach(rows => {
    rows.forEach(id =>{
      if(id === "8e"){
        renderFiles.renderRedTitan(id)
      }
      if(id === "1d"){
        renderFiles.renderBlueTitan(id)
      }
      if(id === "8h"){
        renderFiles.renderRedCanon(id)
      }
      if(id === "1a"){
        renderFiles.renderBlueCanon(id)
      }
      if(id === "2h"){
        renderFiles.renderBlueTank(id)
      }
      if(id === "7a"){
        renderFiles.renderRedTank(id)
      }
      if(id === "2b"){
        renderFiles.renderBlueRicho(id)
      }
      if(id === "7g"){
        renderFiles.renderRedRicho(id)
      }
      if(id === "1f"){
        renderFiles.renderBlueSemiRicho(id)
      }
      if(id === "8c"){
        renderFiles.renderRedSemiRicho(id)
      }
    })
  });
}


function positionsForCanon(data){
  return [data[0]+alphas[alphas.indexOf(data[1])-1],data[0]+alphas[alphas.indexOf(data[1])+1]];
}

function positionsForOthers(data){
  return [(numbers[numbers.indexOf(data[0])-1])+alphas[alphas.indexOf(data[1])-1],
  (numbers[numbers.indexOf(data[0])-1])+alphas[alphas.indexOf(data[1])+1],
  (numbers[numbers.indexOf(data[0])+1])+alphas[alphas.indexOf(data[1])-1],
  (numbers[numbers.indexOf(data[0])+1])+alphas[alphas.indexOf(data[1])+1],
  (numbers[numbers.indexOf(data[0])-1])+data[1],
  (numbers[numbers.indexOf(data[0])+1])+data[1],
  data[0]+alphas[alphas.indexOf(data[1])-1],
  data[0]+alphas[alphas.indexOf(data[1])+1]]
}

export {CreateSquare , positionsForCanon ,pieceIds , positionsForOthers};
