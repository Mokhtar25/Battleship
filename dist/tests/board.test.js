import MakeBoard from "./../bored";

it("testing board", () => {
  const board = MakeBoard();
  const boardGrid = board.getBoard();
  expect(boardGrid[0][0]).toBe(-1);
  expect(boardGrid[1][0]).toBe(-1);
  expect(boardGrid[2][0]).toBe(-1);
  expect(boardGrid[3][0]).toBe(-1);
  expect(boardGrid[5][5]).toBe(-1);

  expect(boardGrid.length).toBe(10);
  expect(boardGrid[0].length).toBe(10);
});

it("testing default placement", () => {
  const board = MakeBoard();
  board.PlaceDef();
  const grid = board.getBoard();

  expect(grid[4][4]).toBe(0);
  expect(grid[4][5]).toBe(0);

  expect(grid[1][1]).toBe(1);
  expect(grid[1][2]).toBe(1);

  expect(grid[3][3]).toBe(4);
  expect(grid[3][4]).toBe(4);
  expect(grid[3][5]).toBe(4);
  expect(grid[3][6]).toBe(4);
  expect(grid[3][7]).toBe(4);
});

it("hitting a ship", () => {
  const board = MakeBoard();
  board.PlaceDef();
  board.Attack([1, 1]);
  board.Attack([1, 2]);
  const grid = board.getBoard();

  expect(grid[1][1]).toBe(-2);
  expect(grid[1][2]).toBe(-2);
});

it("not hitting a ship", () => {
  const board = MakeBoard();
  board.Attack([0, 0]);
  board.Attack([3, 3]);

  const grid = board.getBoard();

  expect(grid[0][0]).toBe(-3);
  expect(grid[3][3]).toBe(-3);
});

it("placing a custom ship", () => {
  const board = MakeBoard();
  board.PlaceShip(2, [0, 0]);

  board.PlaceShip(4, [6, 6]);
  const grid = board.getBoard();

  expect(grid[0][0]).toBe(0);
  expect(grid[0][1]).toBe(0);

  expect(grid[6][6]).toBe(1);
  expect(grid[6][7]).toBe(1);
  expect(grid[6][8]).toBe(1);
  expect(grid[6][9]).toBe(1);
});

it("number of ships placed", () => {
  const board = MakeBoard();
  board.PlaceShip(2, [1, 1]);
  board.PlaceShip(2, [0, 0]);
  board.PlaceShip(4, [6, 6]);

  const ships = board.getShips();
  expect(ships.length).toBe(3);
  expect(ships).toHaveProperty("0");
  expect(ships).toHaveProperty("1");
  expect(ships).toHaveProperty("2");
});
it("placing a ship wrong place", () => {
  const board = MakeBoard();
  board.PlaceShip(2, [9, 9]);

  const grid = board.getBoard();

  expect(grid[9][9]).toBe(-1);
});

it("game over ", () => {
  const board = MakeBoard();

  board.PlaceShip(2, [0, 0]);
  board.PlaceShip(4, [6, 6]);
  board.Attack([0, 0]);
  board.Attack([0, 1]);

  // another ship

  board.Attack([6, 6]);
  board.Attack([6, 7]);
  board.Attack([6, 8]);
  board.Attack([6, 9]);

  expect(board.getSunkedShips()).toBe(2);
  expect(board.GameOver()).toBe(true);
});

it("game not over ", () => {
  const board = MakeBoard();

  board.PlaceShip(2, [0, 0]);
  board.PlaceShip(4, [6, 6]);
  board.Attack([0, 0]);
  board.Attack([0, 1]);

  // another ship

  board.Attack([6, 6]);
  board.Attack([6, 7]);
  board.Attack([6, 8]);

  expect(board.GameOver()).toBe(false);
});
