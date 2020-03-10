var questions = ["Who is the main character of the J-Pop anime Aikatsu?",
                  "Which team was the name of San Antonio's first professional hockey team?",
                  "Which Pacific Island nation is affiliated with the Unitied States of America?",
                  "Which character was SEGA's initial mascot?",
                  "Which Canadian province has the largest population?",
                  "Which song was annoyingly used for many YouTube videos during the late 2000's?",
                  "Which country is international football's biggest punching bag?",
                  "What's a good alternative to beef?",
                  "Which U.S. state has the largest population?",
                  "What is the most recognizable song by the rock band Psychostick?",
                  "Which movie (that bombed hardcore) starred K-Pop megastar BoA that had dacning in it?",
                  "What happens when you divide by zero?"];

var answers1 = ["Juliette Strawberry", "Berry Starlight", "Ichigo Hoshimiya", "Ttalgi Bo-ah a.k.a. Lime"];
var answers2 = ["Iguanas", "Dragons", "Rampage", "Wings"];
var answers3 = ["Tahiti", "Palau", "Solomon Islands", "Federated States of Micronesia"];
var answers4 = ["Sonic the Hedgehog", "Alex Kidd", "Kazuma Kiryu", "Opa-Opa"];
var answers5 = ["Ontario", "Quebec", "British Columbia", "Alberta"];
var answers6 = ["Bring Me To Life - Evanescence", "How You Remind Me - Nickelback", "Bodies - Drowning Pool", "In The End - Linkin Park"];
var answers7 = ["Liechtenstein", "Bhutan", "United States of America", "Comoros"];
var answers8 = ["Whale", "Horse", "Bear", "Bison"];
var answers9 = ["Texas", "Alaska", "California", "New York"];
var answers10 = ["BEER!!!", "Adulting", "So. Heavy.", "Because Boobs"];
var answers11 = ["Dirty Dancin' (2018)", "Make Your Move", "Footloose", "High School Musical"];
var answers12 = ["The universe explodes!", "Instant death!", "All hell breaks loose!", "0 divided by 0 returns 0."];

var answers = [answers1[2], 
                answers2[0], 
                answers3[3], 
                answers4[1], 
                answers5[0], 
                answers6[3], 
                answers7[1], 
                answers8[3], 
                answers9[2], 
                answers10[0], 
                answers11[1], 
                answers12[3]];

var startOfGame;
var endOfGame;
var answer;
var correct = 0;
var wrong = 0;
var correctAnswer = false;
var finalResult = 0
var numberOfQuestions = 12;

var intervalId;
var clockRunning = false;
var time = 60;

$(document).ready(function() {

  function answerList() {
    $("#q1") = this.attr(answers1, answers[0]);
    $("#q2") = this.attr(answers2, answers[1]);
    $("#q3") = this.attr(answers3, answers[2]);
    $("#q4") = this.attr(answers4, answers[3]);
    $("#q5") = this.attr(answers5, answers[4]);
    $("#q6") = this.attr(answers6, answers[5]);
    $("#q7") = this.attr(answers7, answers[6]);
    $("#q8") = this.attr(answers8, answers[7]);
    $("#q9") = this.attr(answers9, answers[8]);
    $("#q10") = this.attr(answers10, answers[9]);
    $("#q11") = this.attr(answers11, answers[10]);
    $("#q12") = this.attr(answers12, answers[11]);
  }
  
  for (var i = 0; i < questions[answerList]; i++) {
    for (var j = 0; j <= answerList.length; j++) {
      $("#answer1-1").on("click", answerList);
      $("#answer1-2").on("click", answerList);
      $("#answer1-3").on("click", answerList);
      $("#answer1-4").on("click", answerList);
    
      $("#answer2-1").on("click", answerList);
      $("#answer2-2").on("click", answerList);
      $("#answer2-3").on("click", answerList);
      $("#answer2-4").on("click", answerList);
      
      $("#answer3-1").on("click", answerList);
      $("#answer3-2").on("click", answerList);
      $("#answer3-3").on("click", answerList);
      $("#answer3-4").on("click", answerList);
  
      $("#answer4-1").on("click", answerList);
      $("#answer4-2").on("click", answerList);
      $("#answer4-3").on("click", answerList);
      $("#answer4-4").on("click", answerList);
      
      $("#answer5-1").on("click", answerList);
      $("#answer5-2").on("click", answerList);
      $("#answer5-3").on("click", answerList);
      $("#answer5-4").on("click", answerList);
      
      $("#answer6-1").on("click", answerList);
      $("#answer6-2").on("click", answerList);
      $("#answer6-3").on("click", answerList);
      $("#answer6-4").on("click", answerList);
      
      $("#answer7-1").on("click", answerList);
      $("#answer7-2").on("click", answerList);
      $("#answer7-3").on("click", answerList);
      $("#answer7-4").on("click", answerList);
      
      $("#answer8-1").on("click", answerList);
      $("#answer8-2").on("click", answerList);
      $("#answer8-3").on("click", answerList);
      $("#answer8-4").on("click", answerList);
      
      $("#answer9-1").on("click", answerList);
      $("#answer9-2").on("click", answerList);
      $("#answer9-3").on("click", answerList);
      $("#answer9-4").on("click", answerList);
      
      $("#answer10-1").on("click", answerList);
      $("#answer10-2").on("click", answerList);
      $("#answer10-3").on("click", answerList);
      $("#answer10-4").on("click", answerList);
      
      $("#answer11-1").on("click", answerList);
      $("#answer11-2").on("click", answerList);
      $("#answer11-3").on("click", answerList);
      $("#answer11-4").on("click", answerList);
     
      $("#answer12-1").on("click", answerList);
      $("#answer12-2").on("click", answerList);
      $("#answer12-3").on("click", answerList);
      $("#answer12-4").on("click", answerList);
      if (j == answerList) {
        correctAnswer = true;
        coreect++;
       } else {
         correctAnswer = false;
         wrong++;
       }
    }
  }

  $("#start").on("click", function() {
    startOfGame = setInterval(count, 1000);
    clockRunning = true;
    hideStuff = "none";
    // console.log(time);
  });

});

$("#finish").on("click", function() {
  clearInterval(startOfGame); 
  $("#correct").text(correct);
  $("#wrong").text(wrong);
  clearTimeout(endOfGame);
  hideStuff = "block";
  // console.log(correct);
  // console.log(wrong);
});

function hideStuff() {
  var hide = document.getElementById("#quiz");
  if (hide.style.display === "none") {
    hide.style.display = "block";
  } else {
    hide.style.display = "none";
  }
}

function count() {
  time--;
  var converted = timeConverter(time);
  console.log(converted);
  if (time == 0){
    clearInterval(startOfGame);
  }
  $("#display").text(converted);
}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}