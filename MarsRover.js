class MarsRover {
  //  initialed with it’s current coordinates
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  // command string which contains multiple commands
  commandString(string) {
    const mapString = new Map([
      ["F", () => this.moveForward()],
      ["B", () => this.moveBackward()],
      ["L", () => this.rotateLeft()],
      ["R", () => this.rotateRight()],
    ]);
    Array.from(string).forEach((letter) => {
      const command = mapString.get(letter);
      command();
    });
  }

  //Move Direction
  move(step) {
    const moveMapping = new Map([
      ["NORTH", () => (this.y += step)],
      ["EAST", () => (this.x += step)],
      ["SOUTH", () => (this.y -= step)],
      ["WEST", () => (this.x -= step)],
    ]);
    const moveDirection = moveMapping.get(this.direction);
    moveDirection();
  }

  //rotate Direction
  rotate(step) {
    const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    const currentIdx = directions.indexOf(this.direction);
    this.direction = directions[(currentIdx + step + 4) % 4];
  }

  //Move forward on current heading
  moveForward() {
    this.move(1);
  }
  //Move backwards on current heading
  moveBackward() {
    this.move(-1);
  }
  //Rotate left by 90 degrees
  rotateLeft() {
    this.rotate(-1);
  }
  //Rotate right by 90 degrees
  rotateRight() {
    this.rotate(1);
  }
  //get current Position
  currentPosition() {
    // console.log(`Current position: (${this.x}, ${this.y}) ${this.direction}`);
    return `Current position: (${this.x},${this.y}) ${this.direction}`;
  }
}

export default MarsRover;
