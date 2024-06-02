import CreateShip from "./ship.js";
export default function MakeBoard() {
    const board = Array(10)
        .fill(-1)
        .map(() => new Array(10).fill(-1));
    let shipsNumber = 0;
    let sunkedships = 0;
    const ships = [];
    const sizes = [2, 2, 3, 4, 5];
    const locations = [
        [4, 4],
        [1, 1],
        [6, 6],
        [9, 2],
        [3, 3],
    ];
    const getShips = () => {
        return ships;
    };
    const getSunkedShips = () => {
        return sunkedships;
    };
    const getBoard = () => {
        return board;
    };
    const GameOver = () => {
        if (shipsNumber !== sunkedships)
            return false;
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
    const Sunk = (id) => {
        return ships[id].isSunk();
    };
    const Attack = (loc) => {
        if (loc[0] >= 10 || loc[1] >= 10)
            return false;
        // adding targets to every place as a hitmarker, -2 means a ship was hit and -3 nothing was hit
        const target = board[loc[0]][loc[1]];
        board[loc[0]][loc[1]] = -3;
        if (target === -1)
            return true;
        board[loc[0]][loc[1]] = -2;
        ships[target].hit();
        if (Sunk(target)) {
            sunkedships++;
        }
        GameOver();
        return true;
    };
    const PlaceShip = (size, location) => {
        // horizantal placemnt
        if (location[1] + size > 10) {
            return false;
        }
        if (board[location[0]][location[1]] !== -1) {
            return false;
        }
        ships[shipsNumber] = CreateShip(size, shipsNumber);
        for (let i = location[1]; i < size + location[1]; i++) {
            board[location[0]][i] = shipsNumber;
        }
        shipsNumber++;
        return true;
    };
    // PlaceDef();
    // Attack([4, 4]);
    // Attack([4, 5]);
    // Attack([3, 3]);
    //
    // console.log(ships[0].health());
    // console.log(ships[3].health());
    //
    // console.log(ships[4]);
    // GameOver();
    // console.table(board);
    //
    return {
        Attack,
        PlaceDef,
        PlaceShip,
        GameOver,
        getBoard,
        getShips,
        getSunkedShips,
    };
}
// MakeBoard();
