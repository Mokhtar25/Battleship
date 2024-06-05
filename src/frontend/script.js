import MakePlayer from "../../dist/player.js";
import PromptSync from "prompt-sync";
// making the grid
const grid = document.querySelector(".grid1");
const grid2 = document.querySelector(".grid2");
const frag = create(1);
const frag2 = create(2);
grid2.append(frag2);
grid.append(frag);

function create(type) {
  const frag = document.createDocumentFragment();

  for (let i = 0; i < 10; i++) {
    for (let i = 0; i < 10; i++) {
      const tmp = document.createElement("div");
      tmp.classList.add("item");
      tmp.value = { move: [i, i], type: type };
      tmp.textContent = "~";

      tmp.addEventListener("click", () => {
        console.log(tmp.value.move, tmp.value.type);
      });
      frag.append(tmp);
    }
  }
  return frag;
}



function getRandomInt(max: number) {
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
    } else {
      console.table(player1.GetBoard().getBoard());

      let list = [getRandomInt(9), getRandomInt(9)];
      player1.RecaiveAttack(list);
      turn = 1;
    }
  }

  console.log("done");
}
GameLogic();
