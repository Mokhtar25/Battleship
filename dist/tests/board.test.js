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
