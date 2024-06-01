import CreateShip from "../../dist/ship";

const main = CreateShip(4);

it("size", () => {
  expect(main.size).toBe(4);
});

it("hit", () => {
  main.hit();
  const name = main.health();
  expect(name).toBe(3);
});

it("not sunk", () => {
  expect(main.isSunk()).toBe(false);
});

it("sunk", () => {
  main.hit();
  main.hit();
  main.hit();
  expect(main.isSunk()).toBe(true);
});
