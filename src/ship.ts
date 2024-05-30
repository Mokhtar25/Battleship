interface Ship {
  size: number;
  hits: number;
  sunk: boolean;
  hit: () => void;
  isSunk: () => boolean;
}

function CreateShip(block: number): Ship {
  const size = block;
  let hits = 0;
  let sunk = false;

  const hit = () => {
    hits = hits + 1;
    if (hits === size) {
      sunk = true;
    }
  };

  const isSunk = () => {
    return sunk;
  };

  return { size, hits, sunk, isSunk, hit };
}
