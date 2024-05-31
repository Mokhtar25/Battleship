export interface Ship {
  size: number;
  hits: number;
  sunk: boolean;
  id: number;
  health: () => number;
  hit: () => void;
  isSunk: () => boolean;
}

export default function CreateShip(block: number, ids: number = 0): Ship {
  const size = block;
  let hits = 0;
  let sunk = false;
  let id = ids;

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

  return { size, id, hits, sunk, health, isSunk, hit };
}
