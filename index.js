var readLineSync = require("readline-sync");
var score = 0;
var userAns = readLineSync.question("What is you name ? ");
console.log("Welcome " + userAns);

function quiz(question , answer){
  var ans = readLineSync.question(question);
  if (ans === answer){
    console.log("Congratulations "+ userAns + " You are right.");
    score ++;
    console.log("Your current score is " + score);
  }
  else {
    console.log("No " + userAns + " This is wrong ");
    console.log("your current scor is " , score);
  }

}

questionOne = {
  question : "Batman or Ironman , who is marvel superhero ? ",
  answer : "Ironman"
}

questionTwo = {
  question : "Who is founder of MCU ? ",
  answer : "Stan Lee"
}

questionThree = {
  question : "When the first Marvel movie was made ? ",
  answer: "2008"
}

var questions = [questionOne, questionTwo, questionThree];

for (var i = 0 ; i < questions.length ; i++){
  quiz(questions[i].question , questions[i].answer);
}

// scores = {
//   name : userAns ,
//   currentScore : score 
// }

// if (scores.name === userAns) {
//   console.log("Your last high score is ", socres.currentScore);
//   if (score > scores.currentScore){
//     score.currentScore = score ;

//     console.log("Your current high score is " , scores.currentScore);
//   }
// }