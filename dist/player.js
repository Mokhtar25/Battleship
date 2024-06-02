import MakeBoard from "./bored.js";
export default function MakePlayer(name, id) {
    const board = MakeBoard();
    const PlaceDefualt = () => {
        board.PlaceDef();
    };
    const PlaceShip = (size, loc) => {
        board.PlaceShip(size, loc);
    };
    const RecaiveAttack = (loc) => {
        return board.Attack(loc);
    };
    const GetBoard = () => {
        return board;
    };
    return { name, GetBoard, PlaceShip, RecaiveAttack, PlaceDefualt, id };
}
