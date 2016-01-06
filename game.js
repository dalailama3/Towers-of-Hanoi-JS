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
