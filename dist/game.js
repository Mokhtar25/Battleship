import MakePlayer from "./player.js";
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export default function GameLogic() {
    const player1 = MakePlayer("human", 1);
    const cmp = MakePlayer("cmp", 2);
    player1.PlaceDefualt();
    cmp.PlaceDefualt();
    let turn = 1;
    while (!cmp.GetBoard().GameOver() && !player1.GetBoard().GameOver()) {
        if (turn === 1) {
            const board = cmp.GetBoard().getBoard();
            turn = 2;
        }
        else {
            let list = [getRandomInt(9), getRandomInt(9)];
            player1.RecaiveAttack(list);
            turn = 1;
        }
    }
    console.log("done");
}
