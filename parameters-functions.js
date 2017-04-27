var highScores = []
function addHighScore(highScoreList, playerInitials, score) {
    var record = { player: playerInitials, score: score };
    highScoreList.push(record); // add record to array
  }
  undefined
  > highScores
  []
  > addHighScore(highScores, 'SDL', 2000);
  undefined
  > highScores
  [ { player: 'SDL', score: 2000 } ]
  > addHighScore(highScores, 'JSL', 10000);
  undefined
  > highScores
  [ { player: 'SDL', score: 2000 },
    { player: 'JSL', score: 10000 } ]
