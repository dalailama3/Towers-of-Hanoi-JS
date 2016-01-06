function HanoiGame () {
  this.stacks = [[3, 2, 1], [], []];
};

HanoiGame.prototype.print = function() {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function(reader, callback) {
  this.print();
  reader.question("Enter index to move from", function (idx1) {
    var startTowerIdx = idx1;
    reader.question("Enter index to move to", function (idx2) {
      var endTowerIdx = idx2;
      callback(startTowerIdx, endTowerIdx);
    });
  });
};

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  if (this.stacks[startTowerIdx].length > 0) {
    if (this.stacks[endTowerIdx].length > 0) {
      var lastIdxStart = this.stacks[startTowerIdx].length - 1;
      var lastIdxEnd = this.stacks[endTowerIdx].length - 1;
      return this.stacks[startTowerIdx][lastIdxStart] < this.stacks[endTowerIdx][lastIdxEnd];
    }
    else { return true; }
  }
  else { return false; }
};

var test =  new HanoiGame;
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
test.promptMove(reader, function (a,b) {
  console.log(a, b);
  reader.close();
});
