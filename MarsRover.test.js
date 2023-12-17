import MarsRover from "./MarsRover";

describe("MarsRover", () => {
  test("Check command String and report current Position", () => {
    const rover = new MarsRover(4, 2, "EAST");
    rover.commandString("FLFFFRFLB");
    expect(rover.currentPosition()).toBe("Current position: (6,4) NORTH");
  });
});

// const rover = new MarsRover(4, 2, "EAST");
// rover.commandString("FLFFFRFLB");
// rover.currentPosition();
