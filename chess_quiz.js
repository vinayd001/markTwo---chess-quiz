var readlineSync = require('readline-sync')

const user_name = readlineSync.question("What is your name: ")
console.log("Welcome " + user_name + " to, do you know Chess quiz\n" )

// stores the score
var score = 0;

var question1 = { 
  question: "Who was the first official Chess World Champion?",
  options: ["Kasparov", "Lasker", "Staunton", "Steinitz"],
  answer: "Steinitz" 
}

var question2 = { 
  question: "Who said, \"It\'s always better to sacrifice your opponent\'s men\"?",
  options: ["Garry Kasparov", "Savielly Tartakover", "Nigel Short", "Bobby Fischer"],
  answer: "Savielly Tartakover" 
}

var question3 = { 
  question: "Besides the King, which is the most powerful piece on the chessboard?",
  options: ["Rook", "Pawn", "Knight", "Queen"],
  answer: "Queen" 
}

var question4 = { 
  question: "Who was Ruy Lopez?",
  options: ["An Italian chess player", "A Welsh singer", "A Spanish priest", "A Spanish King"],
  answer: "A Spanish King"
}

var question5 = { 
  question: "What was the name of the famous player who won the \"Evergreen Game\"?",
  options: ["Adolf Anderssen", "Boris Spassky", "Wilhelm Steinitz", "Vassily Smyslov"],
  answer: "Adolf Anderssen"
}

var questions = [question1, question2, question3, question4, question5];


// check the answer provided by the user
function check_answer(question, user_answer_index) {
  
  if(question.answer === question.options[user_answer_index])
    return true;
  else
    return false;
}


// ask the question from the user
function ask_question(question) {
  
  console.log("\n" + question.question);
  
  const user_answer_index = readlineSync.keyInSelect(question.options, "Which option? : ")
  
  return user_answer_index;

}

for(var i=0; i<questions.length; i++) {
  
  var user_answer_index = ask_question(questions[i]);
  
  if(check_answer(questions[i], user_answer_index))
    score++;
}

console.log("\nYour final score: ", score);