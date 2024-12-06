import { updatePosition } from "./data/positions.js";

function movement(piece_name,old_position,new_position){
  const oldDiv = document.getElementById(old_position);
  const newDiv = document.getElementById(new_position);
  const imageDiv = document.getElementById(piece_name);

  oldDiv.removeChild(imageDiv);
  newDiv.appendChild(imageDiv);

  updatePosition(piece_name,new_position);
}

export {movement}