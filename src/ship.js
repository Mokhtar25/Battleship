export default function CreateShip(block) {
  var size = block;
  var hits = 0;
  var sunk = false;
  var hit = function () {
    hits = hits + 1;
    if (hits === size) {
      sunk = true;
    }
  };
  var health = function () {
    return hits;
  };
  var isSunk = function () {
    return sunk;
  };
  return {
    size: size,
    hits: hits,
    sunk: sunk,
    health: health,
    isSunk: isSunk,
    hit: hit,
  };
}
