"use strict";
const grid = document.querySelector(".grid1");
const grid2 = document.querySelector(".grid2");
const frag = create(1);
const frag2 = create(2);
if (grid && grid2) {
    grid2.append(frag2);
    grid.append(frag);
}
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
                console.log(data);
                if (data === null)
                    return;
                const move = [+data[0], +data[1]];
                const type = data[2];
                console.log(move, type);
            });
            frag.append(tmp);
        }
    }
    return frag;
}
