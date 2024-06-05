import GameLogic from "./game.js";
import MakePlayer from "./player.js";
const grid: HTMLElement | null = document.querySelector(".grid1");
const grid2: HTMLElement | null = document.querySelector(".grid2");
const frag = create(1);
const frag2 = create(2);

if (grid && grid2) {
  grid2.append(frag2);
  grid.append(frag);
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function GameLogicDom() {
  const player1 = MakePlayer("human", 1);
  const cmp = MakePlayer("cmp", 2);
  player1.PlaceDefualt();
  cmp.PlaceDefualt();

  let turn = 1;

  const play = (attack: number[], type: number) => {
    if (type === 1 && turn === 1) {
      const board = cmp.GetBoard().getBoard();
      const childern: HTMLCollection | undefined = grid?.children;
      if (!childern) return;
      UpdateBoard(board, childern);

      cmp.RecaiveAttack(attack);

      turn = 2;
    } else if (type === 2 && turn === 2) {
      const board = player1.GetBoard().getBoard();
      const childern: HTMLCollection | undefined = grid2?.children;
      if (!childern) return;
      UpdateBoard(board, childern);
      let list = [getRandomInt(9), getRandomInt(9)];
      player1.RecaiveAttack(list);
      turn = 1;
    }
    if (cmp.GetBoard().GameOver() || player1.GetBoard().GameOver()) {
      if (grid) grid.textContent = "win";
    }
  };

  return { play, player1, cmp };
}

function UpdateBoard(borad: number[][], frag: HTMLCollection) {
  let items: number[] = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      items.push(borad[i][j]);
    }
  }

  for (const item of frag) {
    item.textContent = `${items[0]}`;
    items.shift();
  }
}
const game = GameLogicDom();

function create(type: number): DocumentFragment {
  const frag = document.createDocumentFragment();

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const tmp: HTMLDivElement = document.createElement("div");
      tmp.classList.add("item");
      tmp.setAttribute("data-value", `${i}${j}${type}`);
      tmp.textContent = "~";

      tmp.addEventListener("click", () => {
        const data: string | null = tmp.getAttribute("data-value");
        if (data === null) return;
        const move = [+data[0], +data[1]];
        const type = +data[2];
        game.play(move, type);
      });
      frag.append(tmp);
    }
  }
  return frag;
}
