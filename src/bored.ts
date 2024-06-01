import CreateShip from "./ship.js";

import { Ship } from "./ship";

export default function MakeBoard() {
  const board: number[][] = Array(10)
    .fill(-1)
    .map(() => new Array(10).fill(-1));

  let shipsNumber = 0;
  let sunkedships = 0;
  const ships: any = {};
  const sizes = [2, 2, 3, 4, 5];
  const locations = [
    [4, 4],
    [1, 1],
    [6, 6],
    [9, 2],
    [3, 3],
  ];

  const GameOver = () => {
    for (let i = 0; i < shipsNumber; i++) {
      if (!ships[i].isSunk()) {
        return false;
      }
    }
    return true;
  };

  const PlaceDef = () => {
    let i = 0;
    for (const size of sizes) {
      PlaceShip(size, locations[i]);
      i++;
    }
    return true;
  };

  const Sunk = (id: number) => {
    return ships[id].isSunk();
  };
  const Attack = (loc: number[]): boolean => {
    if (loc[0] >= 10 || loc[1] >= 10) return false;

    const target = board[loc[0]][loc[1]];
    if (target === -1) return false;

    board[loc[0]][loc[1]] = -2;

    ships[target].hit();
    if (Sunk(target)) {
      sunkedships++;
    }

    return true;
  };

  const PlaceShip = (size: number, location: number[]): boolean => {
    // horizantal placemnt
    if (location[1] + size > 10) {
      return false;
    }

    ships[shipsNumber] = CreateShip(size, shipsNumber);
    shipsNumber++;

    for (let i = location[1]; i < size + location[1]; i++) {
      board[location[0]][i] = 1;
    }
    return true;
  };
}
