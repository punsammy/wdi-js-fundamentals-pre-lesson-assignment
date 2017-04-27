// for (<<initializer>>; <<condition>>; <<post iteration>>) {
//   <<statement>>
// }

var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

for (var index = 0; index < ghosts.length; index++) {
  console.log('Pac-Man eats ' + ghosts[index]);
}

// index-- keeps returned undefined
// Must type 'break' to stop loop
