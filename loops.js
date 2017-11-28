function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  for (let n = 100, n >= 0, n--) {
    if (n === 0) {
      return "Done";
    } else {
      console.log(n);
    }
  }
 return n;
}
