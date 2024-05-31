interface Ship {
  size: number;
  hits: number;
  sunk: boolean;
  health: () => number;
  hit: () => void;
  isSunk: () => boolean;
}

export default function CreateShip(block: number): Ship {
  const size = block;
  let hits = 0;
  let sunk = false;

  const hit = () => {
    hits++;
    if (hits >= size) {
      sunk = true;
    }
  };

  const health = () => {
    return hits;
  };
  const isSunk = () => {
    return sunk;
  };

  return { size, hits, sunk, health, isSunk, hit };
}
