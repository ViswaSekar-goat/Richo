const CurrentPositions = {
  "red titan" : "8e",
  "blue titan" : "1d",
  "red richo" : "7g",
  "blue richo" : "2b",
  "red semi richo" : "8c",
  "blue semi richo" : "1f",
  "red tank" : "7a",
  "blue tank" : "2h",
  "red canon" : "8h",
  "blue canon" : "1a",
}

function updatePosition(piece,new_pos){
  CurrentPositions[piece] = new_pos;
}

export {CurrentPositions , updatePosition}