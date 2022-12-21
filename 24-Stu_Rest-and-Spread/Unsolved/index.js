// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
const newSongs = [...songs];

// spread operator

// TODO: What do you expect to be logged in the console?
console.log(newSongs);

// the same as the songs array, since spread operator copies the values

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  return array.reduce((a, b) => a + b, 0);
};
// returns a single value ?

// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));

// 6, the addition of all things in the array

// TODO: What is this syntax that is being used as the parameter?
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};
//unsure what it is asking

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));

//6, sum of everything in the array

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));

//110, sum of everything in the array
