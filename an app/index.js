var readlineSync = require("readline-sync");
const chalk = require("chalk");
const log = console.log


var score = 0;

var userName = readlineSync.question(chalk.red("Hey, What's your name?"));

console.log(chalk.green("Welcome "+ userName + "!" + " Let's see how well do you know me!"));

//play function

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.green.underline("You are right!"));
    score=score+1;

  } else {
    console.log(chalk.red("You are wrong!"))
    console.log(chalk.blue.underline("The correct answer is: " + answer));

  }

  console.log("Your current score is", score);
  console.log(("-------------------"))
}

//Array of Questions

var questions = [ {
  question:"Who is my favourite artist?",
  answer:"Michael Jackson"
},  {
  question:"Do I prefer coffee or tea?",
  answer:"tea"
},{
  question:"Which fictional character do I like the most",
  answer:"Tony Stark"
},{
  question:"Which is my most favourite movie?",
  answer:"Forrest Gump"
},{
  question:"Which is my most favourite song?",
  answer:"Time"
},{
  question:"Which is my favorite city??",
  answer:"Pune"
}]

//loop

for (var i = 0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yayy! You scored", score );