import MakePlayer from "./player.js";
import PromptSync from "prompt-sync";
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const prompt = PromptSync();
function GameLogic() {
    const player1 = MakePlayer("human", 1);
    const cmp = MakePlayer("cmp", 2);
    player1.PlaceDefualt();
    cmp.PlaceDefualt();
    let turn = 1;
    while (!cmp.GetBoard().GameOver() && !player1.GetBoard().GameOver()) {
        if (turn === 1) {
            console.table(cmp.GetBoard().getBoard());
            const attack = prompt("chose a place");
            let tmp = attack.split("");
            let list = [+tmp[0], +tmp[2]];
            cmp.RecaiveAttack(list);
            turn = 2;
        }
        else {
            console.table(player1.GetBoard().getBoard());
            let list = [getRandomInt(9), getRandomInt(9)];
            console.log(list);
            player1.RecaiveAttack(list);
            turn = 1;
        }
    }
    console.log("done");
}
GameLogic();
