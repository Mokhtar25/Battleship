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
        console.log(tmp.value);
      });
      frag.append(tmp);
    }
  }
  return frag;
}
