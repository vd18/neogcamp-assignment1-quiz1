var readlinesync = require('readline-sync');
var score = 0;
function askname()
{
  var username = readlinesync.question("what is your name ")
  console.log("welcome "+username+ " to my quiz")
  console.log("----------------------")
}

function quiz(question, answer)
{
var askquestion = readlinesync.question(question)
if(askquestion===answer)
  {
    console.log("you are right!")
    score = score+1
  }
  else
  {
    console.log("you are wrong")
  }
  
  console.log("----------------------")
  
}

var questions = [
  {
    question: "what is my name? ",
    answer: "vandan"
  },
  {
    question: "what is my age? ",
    answer: "18"
  },
  {
    question: "where do i live? ",
    answer: "junagadh"
  },
  {
    question: "what is my nickname? ",
    answer: "18"
  },
  {
    question: "do i like anime? ",
    answer: "yes"
  }
];

function logicfor()
{
  for(var x=0; x<questions.length; x++)
  {
    quiz(questions[x].question,questions[x].answer)
  }
}

askname()
logicfor()

console.log("your score is "+score+ " out of 5")
console.log("-------------------")


var username = readlinesync.question("do you want to know where i learn how to make this types of quiz?  ")
if(username==="yes")
{
  console.log("well then checkout https://neog.camp/guide/home")
}
else
{
  console.log("ok, thank you for playing")
}