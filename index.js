var readlinesync = require("readline-sync")

var userName = readlinesync.question("Tell me your name!! ")

console.log("Welcome ", userName, " to this Batman Quiz and test if you are a real fan")
console.log("Select option- a or b")
var score = 0;

function quiz(question, answer) {
  var userAnswer = readlinesync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct answer!")
    score = score + 1;
  }
  else {
    console.log("Wrong Answer!!")
  }
  console.log("Current Score: ", score)
  console.log("---------------------------")
}

var questions = [
  {
    question: "What is Real Name of Batman? (a)Bruce Wyane (b)Tony Stark  ",
    answer: "a"
  },
  {
    question: "What is name of Batman's vehicle? (a)Batcar (b)Batmobile ",
    answer: "b"
  },
  {
    question: "Who is director of The Dark Knight? (a)Christopher Nolan (b)Matt Reeves ",
    answer: "a"
  },
  {
    question: "Who is batman's sidekick? (a)Batwomen (b)Batgirl ",
    answer: "b"
  },
  {
    question: "Who is better as Batman (a)Christian Bale (b) Robert Pattinson ",
    answer: "a"
  }]

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}
console.log("Your final score is: ", score, "points");
console.log("Thanks for being a Batfan ;) ")