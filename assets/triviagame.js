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
var answers11 = ["The Game", "Make Your Move", "Athena", "Over The Hedge"];
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
var time = 0;

$(document).ready(function() {

  $("#start").on("click", function() {
    startOfGame = setTimeout(function() {
    }, 60000);
    for (var i = 0; i < questions.length; i++) {
      for (var j = 0; j <= questions[0]; j++) {
        $("#block1").text(questions[0]);
        $("#answer1-1").text(answers1[0]);
        $("#answer1-2").text(answers1[1]);
        $("#answer1-3").text(answers1[2]);
        $("#answer1-4").text(answers1[3]);

        $("#answer1-1").on("click", answers1[0]);
        $("#answer1-2").on("click", answers1[1]);
        $("#answer1-3").on("click", answers1[2]);
        $("#answer1-4").on("click", answers1[3]);
        if (answers1[2] = answers[0]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[1]; j++) {
        $("#answer2-1").on("click", answers2[0]);
        $("#answer2-2").on("click", answers2[1]);
        $("#answer2-3").on("click", answers2[2]);
        $("#answer2-4").on("click", answers2[3]);
        if (answers2[0] = answers[1]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[2]; j++) {
        $("#answer3-1").on("click", answers3[0]);
        $("#answer3-2").on("click", answers3[1]);
        $("#answer3-3").on("click", answers3[2]);
        $("#answer3-4").on("click", answers3[3]);
        if (answers3[3] = answers[2]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[3]; j++) {
        $("#answer4-1").on("click", answers4[0]);
        $("#answer4-2").on("click", answers4[1]);
        $("#answer4-3").on("click", answers4[2]);
        $("#answer4-4").on("click", answers4[3]);
        if (answers4[1] = answers[3]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[4]; j++) {
        $("#answer5-1").on("click", answers5[0]);
        $("#answer5-2").on("click", answers5[1]);
        $("#answer5-3").on("click", answers5[2]);
        $("#answer5-4").on("click", answers5[3]);
        if (answers5[0] = answers[4]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[5]; j++) {
        $("#answer6-1").on("click", answers6[0]);
        $("#answer6-2").on("click", answers6[1]);
        $("#answer6-3").on("click", answers6[2]);
        $("#answer6-4").on("click", answers6[3]);
        if (answers6[3] = answers[5]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[6]; j++) {
        $("#answer7-1").on("click", answers7[0]);
        $("#answer7-2").on("click", answers7[1]);
        $("#answer7-3").on("click", answers7[2]);
        $("#answer7-4").on("click", answers7[3]);
        if (answers7[1] = answers[6]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[7]; j++) {
        $("#answer8-1").on("click", answers8[0]);
        $("#answer8-2").on("click", answers8[1]);
        $("#answer8-3").on("click", answers8[2]);
        $("#answer8-4").on("click", answers8[3]);
        if (answers8[3] = answers[7]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[8]; j++) {
        $("#answer9-1").on("click", answers9[0]);
        $("#answer9-2").on("click", answers9[1]);
        $("#answer9-3").on("click", answers9[2]);
        $("#answer9-4").on("click", answers9[3]);
        if (answers9[2] = answers[8]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[9]; j++) {
        $("#answer10-1").on("click", answers10[0]);
        $("#answer10-2").on("click", answers10[1]);
        $("#answer10-3").on("click", answers10[2]);
        $("#answer10-4").on("click", answers10[3]);
        if (answers10[0] = answers[9]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[10]; j++) {
        $("#answer11-1").on("click", answers11[0]);
        $("#answer11-2").on("click", answers11[1]);
        $("#answer11-3").on("click", answers11[2]);
        $("#answer11-4").on("click", answers11[3]);
        if (answers11[1] = answers[10]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
      for (var j = 0; j <= questions[11]; j++) {
        $("#answer12-1").on("click", answers12[0]);
        $("#answer12-2").on("click", answers12[1]);
        $("#answer12-3").on("click", answers12[2]);
        $("#answer12-4").on("click", answers12[3]);
        if (answers12[3] = answers[11]) {
          correctAnswer = true;
          coreect++;
         } else {
           correctAnswer = false;
           wrong++;
         }
      }
    }
  });

});

$("#finish").on("click", function() {

  clearTimeout(endOfGame);
});
function count() {
  time--;
  var converted = timeConverter(time);
  console.log(converted);

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