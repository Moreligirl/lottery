function getLottery() {

  let numbersPool = getRangeArray(1, 49);
  let combinationResult = [];

  for (let i = 0; i < 7; i++) {

    const randomIndex = Math.floor(Math.random() * numbersPool.length);

    combinationResult.push(numbersPool[randomIndex]);
    numbersPool.splice(randomIndex, 1); // removes the number from the pool

  }

  return combinationResult;
}

function getRangeArray(startIndex, endIndex) {

  let array = [];

  for (let i = startIndex; i <= endIndex; i++) {
    array.push(i);
  }

  return array;
}


function displayLotteryBall(number, index) {

  setTimeout(() => {
    $("<h3>").addClass("ball animate__animated animate__bounceInDown").text(number).appendTo("#results");
  }, 1500 * index);
}

function startLottery() {
  $("#results").empty();

  const lotteryResults = getLottery();
  lotteryResults.forEach(displayLotteryBall);
}
