import MakeBoard from "./bored";

export default function MakePlayer(name: string, id: number) {
  const board = MakeBoard();

  const PlaceDefualt = () => {
    board.PlaceDef();
  };

  const PlaceShip = (size: number, loc: number[]) => {
    board.PlaceShip(size, loc);
  };

  const RecaiveAttack = (loc: number[]) => {
    return board.Attack(loc);
  };

  const GetBoard = () => {
    return board;
  };

  return { name, GetBoard, PlaceShip, RecaiveAttack, PlaceDefualt, id };
}
