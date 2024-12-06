const CurrentPositions = {
  "red_titan" : "8e",
  "blue_titan" : "1d",
  "red_richo" : "7g",
  "blue_richo" : "2b",
  "red_semi_richo" : "8c",
  "blue_semi_richo" : "1f",
  "red_tank" : "7a",
  "blue_tank" : "2h",
  "red_canon" : "8h",
  "blue_canon" : "1a",
}

function updatePosition(piece,new_pos){
  CurrentPositions[piece] = new_pos;
}

export {CurrentPositions , updatePosition}