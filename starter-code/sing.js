console.log("sing.js loaded");

let number = window.prompt("How many bottles?");

for (let i = number; i >= 0; i --) {
  if (i == 0) {
    console.log("No more bottles of beer on the wall, no more bottles of beer! Can't take one down or pass it around, cuz no more bottles of beer on the wall!");
  } else if (i == 1) {
    console.log(`${i} bottle of beer on the wall, ${i} bottle of beer! Take one down, pass it around, no more bottles of beer on the wall!`);
  } else {
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer! Take one down, pass it around, ${i-1} bottles of beer on the wall!`);
  }
};
