import MakePlayer from "./player.js";
import "./frontend/output.css";
const grid = document.querySelector(".grid1");
const grid2 = document.querySelector(".grid2");
const frag = create(1);
const frag2 = create(2);
if (grid && grid2) {
    grid2.append(frag2);
    grid.append(frag);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function GameLogicDom() {
    const player1 = MakePlayer("human", 1);
    const cmp = MakePlayer("cmp", 2);
    player1.PlaceDefualt();
    cmp.PlaceDefualt();
    const play = (attack, type) => {
        if (type === 2) {
            player1.RecaiveAttack(attack);
            const board = cmp.GetBoard().getBoard();
            const childern = grid === null || grid === void 0 ? void 0 : grid.children;
            if (!childern)
                return;
            UpdateBoard(board, childern);
            let list = [getRandomInt(9), getRandomInt(9)];
            cmp.RecaiveAttack(list);
            const board1 = player1.GetBoard().getBoard();
            const childern1 = grid2 === null || grid2 === void 0 ? void 0 : grid2.children;
            if (!childern1)
                return;
            UpdateBoard(board1, childern1);
        }
        if (cmp.GetBoard().GameOver() || player1.GetBoard().GameOver()) {
            const winnerBanner = document.querySelector(".banner");
            if (winnerBanner === null)
                return;
            winnerBanner.textContent = cmp.GetBoard().GameOver()
                ? "You Lost"
                : "You Won";
        }
    };
    return { play, player1, cmp };
}
function UpdateBoard(borad, frag) {
    let items = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            items.push(borad[i][j]);
        }
    }
    for (const item of frag) {
        item.textContent = items[0] >= -1 ? "~" : `${items[0]}`;
        items.shift();
    }
}
const game = GameLogicDom();
function create(type) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const tmp = document.createElement("div");
            tmp.classList.add("item");
            tmp.setAttribute("data-value", `${i}${j}${type}`);
            tmp.textContent = "~";
            tmp.addEventListener("click", () => {
                const data = tmp.getAttribute("data-value");
                if (data === null)
                    return;
                const move = [+data[0], +data[1]];
                const type = +data[2];
                game.play(move, type);
                console.log(move, type);
            });
            frag.append(tmp);
        }
    }
    return frag;
}
