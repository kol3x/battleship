import { Ship } from "./classes/ship";
import { Gameboard } from "./classes/gameboard";
import { Player } from "./classes/player";

test("ship correct length", () => {
  let ship = new Ship(3);
  expect(ship.len).toBe(3);
});

test("multiple hits", () => {
  let ship = new Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.timesHit).toBe(2);
});

test("3-length ship sunking when has 3 hits", () => {
  let ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("single hit registers", () => {
  let ship = new Ship(3);
  ship.hit();
  expect(ship.timesHit).toBe(1);
});

test("add horizontal ship, check last cell", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "horizon");
  expect(gameboard.map[0][3]).toBe("ship");
});

test("add horizontal ship, check second to last cell", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "horizon");
  expect(gameboard.map[0][2]).toBe("ship");
});

test("add horizontal ship, check first cell", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "horizon");
  expect(gameboard.map[0][0]).toBe("ship");
});

test("add vertical ship, check first cell", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "vertical");
  expect(gameboard.map[0][0]).toBe("ship");
});

test("add vertical ship, check second cell", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "vertical");
  expect(gameboard.map[1][0]).toBe("ship");
});

test("check an empty cell on a board", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "vertical");
  expect(gameboard.map[5][5]).toBe(null);
});

test("ship added to ships on a board", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "vertical");
  expect(gameboard.ships[0]).toBeInstanceOf(Ship);
});

test("fail to place 2 ships that share cells", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "horizon");
  expect(gameboard.placeShip([0, 2], 4, "vertical")).toBe(false);
});

test("fail to place ship beyond edge", () => {
  let gameboard = new Gameboard();
  expect(gameboard.placeShip([9, 2], 4, "vertical")).toBe(false);
});

test("receive attack on empty cell results in a miss", () => {
  let gameboard = new Gameboard();
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.map[0][0]).toBe("miss");
});

test("receive attack on ship cell results in a hit", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "vertical");
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.map[0][0]).toBe("hit");
});

test("receive attack on ship cell results in a hit inside ship object", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "vertical");
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.ships[0].timesHit).toBe(1);
});

test("hitting same ship cell twice fails", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "vertical");
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.receiveAttack([0, 0])).toBe(false);
});

test("hitting same empty cell twice fails", () => {
  let gameboard = new Gameboard();
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.receiveAttack([0, 0])).toBe(false);
});

test("2 ships can't be placed directly next to each other", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 4, "horizon");
  expect(gameboard.placeShip([1, 0], 4, "horizon")).toBe(false);
});

test("2 ships can't be placed directly next to each other #2", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([1, 1], 4, "vertical");
  expect(gameboard.placeShip([3, 2], 4, "horizon")).toBe(false);
});


test("gameboard aware when it's only ship have sunk", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([1, 1], 4, "vertical");
  gameboard.receiveAttack([1, 1]);
  gameboard.receiveAttack([2, 1]);
  gameboard.receiveAttack([3, 1]);
  gameboard.receiveAttack([4, 1]);
  expect(gameboard.allShipsSunk()).toBe(true);
})

test("placing ship giver correct cords of every ship cell to a ship object", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([1, 1], 4, "vertical");
  expect(gameboard.ships[0].cords[0][0]).toBe(1);
})

test("gameboard aware when all of it ships have sunk", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([1, 1], 4, "vertical");
  gameboard.placeShip([3, 3], 3, "horizon");
  gameboard.receiveAttack([1, 1]);
  gameboard.receiveAttack([2, 1]);
  gameboard.receiveAttack([3, 1]);
  gameboard.receiveAttack([4, 1]);

  gameboard.receiveAttack([3, 3]);
  gameboard.receiveAttack([3, 4]);
  gameboard.receiveAttack([3, 5]);
  
  expect(gameboard.allShipsSunk()).toBe(true);
})

test("gameboard aware when not all of it ships have sunk", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([1, 1], 4, "vertical");
  gameboard.placeShip([3, 3], 3, "horizon");
  gameboard.receiveAttack([1, 1]);
  gameboard.receiveAttack([2, 1]);
  gameboard.receiveAttack([4, 1]);

  gameboard.receiveAttack([3, 3]);
  gameboard.receiveAttack([4, 4]);
  gameboard.receiveAttack([4, 5]);
  
  expect(gameboard.allShipsSunk()).toBe(false);
})

test("ship doesn't place adjacent to another ship", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([1, 6], 5, 'vertical'); 
  expect(gameboard.placeShip([5, 2], 4, 'horizon')).toBe(false);
  
})

test("check if a cell has adjacent ships", () => {
  let gameboard = new Gameboard();
  gameboard.placeShip([1, 6], 5, 'vertical'); 
  expect(gameboard.adjacentShips(5, 5)).toBe(true);
})