import CreateShip from "../ship.js";

const main = CreateShip(4);

console.log(main.size);
it("size", () => {
  expect(main.size).toBe(4);
});
