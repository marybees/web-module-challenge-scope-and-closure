// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 declares count within the function scope, whearas counter2 declares count outside of the function scope using closure.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter2 uses closure since count is defined outside of the function scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 code would be preferable when count is only needed and referenced inside the scope of the function. counter2 would be preferable if you want the count to reset each time the function is called.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
// console.log(counter1()); //console.logs 0
// console.log(counter1()); //console.logs 1
// console.log(counter1()); //console.logs 2

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// console.log(counter2()); //console.logs 0
// console.log(counter2()); //console.logs 1
// console.log(counter2()); //console.logs 2


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */


function inning() {
    let score = 0
    score = Math.floor(Math.random() * 3);
    return score;
}

console.log(inning()); 

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberOfInnings) {
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < numberOfInnings; i++) {
    homeScore = homeScore + inning();
    awayScore = awayScore + inning();
  }
  return {home: homeScore, away: awayScore};
}

console.log(finalScore(inning, 9));



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(awayScore, homeScore, inningNumber) {
  let suffix = " ";
  if (inningNumber === 1) {
    suffix = "st"; 
  } else if (inningNumber === 2) {
    suffix = "nd"; 
  } else if (inningNumber === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  console.log(`${inningNumber}${suffix} inning: ${awayScore} - ${homeScore}`);
  return inningNumber;
}

function scoreboard(getInningScore, inning, numberOfInnings) {
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < numberOfInnings; i++) {
    homeScore = homeScore + inning();
    awayScore = awayScore + inning();
    getInningScore(awayScore, homeScore, i+1);
  }
  console.log(`Final Score: ${awayScore} - ${homeScore}`);
}

scoreboard(getInningScore, inning, 9);

