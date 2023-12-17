import MarsRover from "./MarsRover.js";

// Example Usage
const rover = new MarsRover(4, 2, "EAST");
rover.commandString("FLFFFRFLB");
rover.currentPosition();
