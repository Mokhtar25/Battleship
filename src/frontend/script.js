const grid = document.querySelector(".grid1");

const grid2 = document.querySelector(".grid2");

const frag = create();

const frag2 = create();
grid2.append(frag2);
grid.append(frag);

function create() {
  const frag = document.createDocumentFragment();

  for (let i = 0; i < 10; i++) {
    for (let i = 0; i < 10; i++) {
      const tmp = document.createElement("div");
      tmp.classList.add("item");

      tmp.value = [i, i];
      tmp.addEventListener("click", () => {
        console.log(tmp.value);
      });
      frag.append(tmp);
    }
  }
  return frag;
}
