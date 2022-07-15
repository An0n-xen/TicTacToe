let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ar = [1, 2, 3];

let winChecker = (ar, arr) => {
  let count = 0;
  for (e in ar) {
    if (arr.includes(ar[e])) {
      count += 1;
    }
    if (count == 3) {
      console.log("won");
    }
  }
};

winChecker(ar, arr);
