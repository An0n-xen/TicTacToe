let main_container = document.getElementsByClassName("main_container");
let containers = document.getElementById("sub");

// Individual divs
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");

let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");

// Position containers
let x_array = [];
let o_array = [];
let _returnState = 1;

// List of elements
let contain_list = [one, two, three, four, five, six, seven, eight, nine];

// WinChecker
let winChecker = (ar, arr, _played) => {
  let count = 0;
  for (e in ar) {
    if (arr.includes(ar[e])) {
      count += 1;
    }
    if (count == 3) {
      alert(_played + " Wins");
    }
  }
};

// Gameplay
let GamePlay = (_played, pos) => {
  if (_played == "X") {
    // making postion list
    x_array.push(pos);

    // 1h 1 2 3
    winChecker([1, 2, 3], x_array, "X");

    // 2h 4 5 6
    winChecker([4, 5, 6], x_array, "X");

    // 3h 7 8 9
    winChecker([7, 8, 9], x_array, "X");

    // 1v 1 4 7
    winChecker([1, 4, 7], x_array, "X");

    // 2v 2 5 8
    winChecker([2, 5, 8], x_array, "X");

    // 3v 3 6 9
    winChecker([3, 6, 9], x_array, "X");

    // 1x 1 5 9
    winChecker([1, 5, 9], x_array, "X");

    // 2x 3 5 7
    winChecker([3, 5, 7], x_array, "X");
  } else {
    o_array.push(pos);
    // 1h 1 2 3
    winChecker([1, 2, 3], o_array, "O");

    // 2h 4 5 6
    winChecker([4, 5, 6], o_array, "O");

    // 3h 7 8 9
    winChecker([7, 8, 9], o_array, "O");

    // 1v 1 4 7
    winChecker([1, 4, 7], o_array, "O");

    // 2v 2 5 8
    winChecker([2, 5, 8], o_array, "O");

    // 3v 3 6 9
    winChecker([3, 6, 9], o_array, "O");

    // 1x 1 5 9
    winChecker([1, 5, 9], o_array, "O");

    // 2x 3 5 7
    winChecker([3, 5, 7], o_array, "O");
  }
};

// Add EventListeners
// Add X
for (let i = 0; i < contain_list.length; i++) {
  contain_list[i].addEventListener("click", () => {
    if (_returnState == 1) {
      contain_list[i].querySelector(".text").innerHTML = "X";
      GamePlay("X", i + 1);
      _returnState = 2;
    }
  });
}

for (let i = 0; i < contain_list.length; i++) {
  contain_list[i].addEventListener("dblclick", () => {
    if (_returnState == 2) {
      contain_list[i].querySelector(".text").innerHTML = "O";
      GamePlay("O", i + 1);
      _returnState = 1;
    }
  });
}
