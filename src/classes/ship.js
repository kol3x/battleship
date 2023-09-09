class Ship {
  constructor(len) {
    this.len = len;
    this.cords = [];
    this.timesHit = 0;
  }
  hit() {
    this.timesHit += 1;
  }
  isSunk() {
    if (this.len === this.timesHit) return true;
    return false;
  }
}

export { Ship };