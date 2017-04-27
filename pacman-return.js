function addScore(currentScore, eaten) {
  switch (eaten) {
  case 'dot':
    scoreToAdd = 10;
    break;
  case 'powerPellet':
    scoreToAdd = 50;
    break;
  case 'firstGhost':
    scoreToAdd = 200;
    break;
  case 'secondGhost':
    scoreToAdd = 400;
    break;
  }

  return currentScore + scoreToAdd;
}

undefined
> var score = 0;
undefined
> score = addScore(score, 'dot');
10
> score = addScore(score, 'dot');
20
> score = addScore(score, 'dot');
30
> score = addScore(score, 'powerPellet');
80
> score = addScore(score, 'firstGhost');
280
> console.log('Your score: ' +score);
Your score: 280
undefined
