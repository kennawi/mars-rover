# Mars Rover

This application simulates team that explores Mars by sending remotely controlled vehicles to the surface of the planet

## Getting Started

Follow the steps below to set up and run the Mars Rover application.

### Prerequisites

- Node.js installed

### Installation

1. Navigate to the project

```bash
cd mars-rover
```

1. Install dependencies:

```bash
npm i
```

### Usage

1. Open the index.js file and provide the initial coordinates and direction for the Mars Rover:

### Example

```js
const rover = new MarsRover(4, 2, "EAST");
rover.commandString("FLFFFRFLB");
rover.currentPosition();
```

## Test

```bash
npm test
```
